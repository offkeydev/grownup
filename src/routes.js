import React from "react"
import {Switch, Route} from "react-router-dom"

import {Main} from "./pages/Main/Main"
import {Register} from "./pages/Register/Register"
import {Login} from "./pages/Login/Login";

export const useRoutes = (userToken) => {
    if(userToken){
        return(
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        )
    }
}