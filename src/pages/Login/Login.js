import React, {useState} from "react";
import {NavLink} from "react-router-dom";



export const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })

    return(
        <div className="page-login">
            <div className="inn">
                <form action="">
                    <label>
                        <span>Email</span>
                        <input type="text" required={true}/>
                    </label>
                    <label>
                        <span>password</span>
                        <input type="text" required={true}/>
                    </label>
                    <button>Login</button>
                </form>
                <NavLink to="/">Нет аккаунта? Зарегистрируйтесь</NavLink>
            </div>
        </div>
    )
}