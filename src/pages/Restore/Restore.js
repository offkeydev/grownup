import React from "react";
import "./restore.sass"
import {NavLink} from "react-router-dom";

export const Restore = () => {
    return(
        <div className="page-restore">
            <div className="inn">
                <aside>

                </aside>
                <aside>
                    <h4>Восстановление</h4>
                    <form action="" onSubmit={}>
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