import React, {useState} from "react";
import "./login.sass"

import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import fbase from "../../firebase";
import {setErrorTH} from "../../store/reducers/errors";
import {setUser} from "../../store/reducers/auth";



export const Login = () => {
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })

    const formHandler = event => {
        setLoginData({...loginData, [event.target.name] : event.target.value})
    }

    const loginUser = (e) => {
        console.log(loginData)
        e.preventDefault()
        fbase.auth().signInWithEmailAndPassword(loginData.email, loginData.password)
            .then(response => {
                dispatch(setUser(response.user))
            })
            .catch(error => {
                dispatch(setErrorTH(error))
            })
    }

    return(
        <div className="page-login">
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
                    <h4>Вход</h4>
                    <form action="" onSubmit={loginUser}>
                        <label>
                            <input type="email" name="email" required={true} placeholder="Email"
                                onChange={formHandler}
                            />
                        </label>
                        <label>
                            <input type="password" name="password" required={true} placeholder="Password"
                                   onChange={formHandler}
                            />
                        </label>
                        <button className="btn">Login</button>
                    </form>
                    <NavLink to="/register">Нет аккаунта? Зарегистрируйтесь</NavLink>
                    <NavLink to="/restore" className="pass-reset">Забыли пароль?</NavLink>
                </aside>

            </div>
        </div>
    )
}