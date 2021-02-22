import React, {useState} from "react";
import "./restore.sass"
import axios from "axios";

import {confiq} from "../../config";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setErrorTH} from "../../store/reducers/errors";

export const Restore = () => {
    const [email, setEmail] = useState(null)
    const dispatch = useDispatch()
    const restoreAccess = (e) =>{
        e.preventDefault();
        try {
            axios.get(confiq().endpoints.users)
                .then(response => {
                    Object.keys(response.data).forEach(key => {
                        if (response.data[key].email === email){
                            alert('Send message to email')
                            return false
                        } else{
                            const error = {message: "There is no user with this email"}
                            dispatch(setErrorTH(error))
                        }
                    })
                })
                .catch(err => {
                    //dispatch(setErrorTH(err))
                    console.log("axios err", err)
                })
        } catch (err){
            //dispatch(setErrorTH())
            console.log(err)
        }

        console.log(email)
    }

    return(
        <div className="page-restore">
            <div className="inn">
                <aside>
                    <div className="content">
                        <h1>Проблеммы с доступом на сервис?</h1>
                        <h2>Введите свой действующий email, мы вышлем Вам инструкцию по восстановлению доступа.</h2>
                        <h3>Если у Вас остались вопросы или пожелания, свяжитесь с нами через контакную форму.</h3>
                    </div>
                    <i className="version">product vesion: 1.0.0</i>
                </aside>
                <aside>
                    <h4>Восстановление</h4>
                    <form action="" onSubmit={restoreAccess}>
                        <label>
                            <input type="email" required={true} name="name" onChange={(event => {setEmail(event.target.value)})} placeholder="Email"/>
                        </label>
                        <button className="btn">Restore</button>
                    </form>
                    <NavLink to="/">Уже есть аккаунт? Войдите в систему!</NavLink>
                </aside>
            </div>
        </div>
    )
}