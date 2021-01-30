import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import fbase from "../../firebase";
import axios from "axios";


export const Register = () => {
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
        }

        try {
            fbase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(userRes => {
                    axios.post('https://grownup-b6a1c-default-rtdb.firebaseio.com/users.json', user)
                        .then(response => {
                            fbase.database().ref('/users/' + response.data.name).update({
                                id: userRes.user.uid
                            })
                                .then(resp => {
                                    alert("User was created!")
                                })
                        })
                })
                .catch(error => {
                    console.log(error)
                })
        } catch (error){
            console.log(error.message)
        }

    }

    return(
        <div className="register-page">
            <div className="inn">
                <form action="" onSubmit={registerUser}>
                    <label>
                        <span>Name</span>
                        <input type="text" required={true} name="name" onChange={formHandler}/>
                    </label>
                    <label>
                        <span>Email</span>
                        <input type="text" required={true} name="email" onChange={formHandler}/>
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="text" required={true} name="password" onChange={formHandler}/>
                    </label>

                    <button>Register</button>
                </form>

                <NavLink to="/login">Уже есть аккаунт? Войдите в систему!</NavLink>
            </div>
        </div>
    )
}