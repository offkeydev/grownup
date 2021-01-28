import React from "react"
import {Switch, Route} from "react-router-dom"

import {Main} from "./pages/Main/Main"

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
                <Route path="/" exact component={Main}/>
            </Switch>
        )
    }
}