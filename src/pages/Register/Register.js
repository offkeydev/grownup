import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import fbase from "../../firebase";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setErrorTH} from "../../store/reducers/errors";
import {setLoader} from "../../store/reducers/loader";
import "./Register.sass"



export const Register = () => {
    const dispatch = useDispatch()
    const [register, setRegister] = useState({
        id: null,
        name: '',
        email: '',
        password: ''
    })

    const formHandler = event => {
        setRegister({...register, [event.target.name] : event.target.value})
    }


    const registerUser = (e) => {

        e.preventDefault()

        const user = {
            id: null,
            name: register.name,
            email: register.email,
            password: register.password,
            isAdmin: register.email === "sergeyoffkey@gmail.com",
            config: {
                stats: {
                    currentlvl: 1,
                    currentExp: 0,
                    nextLevelExp: 150,
                },
                grown: {
                    exp: 4,
                    gold: 12
                }
            },
            methods: {
                raiseExp: () => {
                    return this.grown.exp * 1.2
                },
                raiseGold: () => {
                    return this.grown.gold * 1.2
                }
            },
            quests: [

            ]
        }

        try {
            dispatch(setLoader(true))
            fbase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(userRes => {
                    axios.post('https://grownup-b6a1c-default-rtdb.firebaseio.com/users.json', user)
                        .then(response => {
                            fbase.database().ref('/users/' + response.data.name).update({
                                id: userRes.user.uid
                            })
                                .then(resp => {
                                    dispatch(setLoader(false))
                                    alert("User was created!")
                                })
                        })
                })
                .catch(error => {
                    dispatch(setLoader(false))
                    dispatch(setErrorTH(error))
                })
        } catch (error){

        }

    }

    return(
        <div className="register-page">
            <div className="inn">
                <aside>
                    <div className="content">
                        <h1>Self GrownUP Service</h1>
                        <h2>Добро пожаловать на сервис по прокачиванию себя и своих skill-ов</h2>
                        <h3>Прокачивай себя в стиле RPG. Получай EXP и GOLD покупай снаряжение / предметы и многое другое!</h3>
                    </div>
                    <i className="version">product vesion: 1.0.0</i>
                </aside>
                <aside>
                    <h4>Регистрация</h4>
                    <form action="" onSubmit={registerUser}>
                        <label>
                            <input type="text" required={true} name="name" onChange={formHandler} placeholder="Name"/>
                        </label>
                        <label>
                            <input type="email" required={true} name="email" onChange={formHandler} placeholder="Email"/>
                        </label>
                        <label>
                            <input type="password" required={true} name="password" onChange={formHandler} placeholder="Password"/>
                        </label>

                        <button className="btn">Register</button>
                    </form>
                    <NavLink to="/">Уже есть аккаунт? Войдите в систему!</NavLink>

                </aside>
            </div>
        </div>
    )
}