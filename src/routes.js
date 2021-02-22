import React from "react"
import {Switch, Route} from "react-router-dom"

//Admin routes
import {AMain} from "./pages/Admin/AMain/AMain";

//Simple user routes
import {Main} from "./pages/Main/Main"
import {Register} from "./pages/Register/Register"
import {Restore} from "./pages/Restore/Restore"
import {Login} from "./pages/Login/Login";
import {Status} from "./pages/Status/Status";

export const useRoutes = (userToken, isAdmin) => {
    //IS AUTH
    if(userToken){
        if (isAdmin){
            return(
                <Switch>
                    <Route path="/" exact component={AMain}/>
                </Switch>
            )
        } else {
            return(
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/status" exact component={Status}/>
                </Switch>
            )
        }

    } else {
        return (
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/restore" exact component={Restore}/>
            </Switch>
        )
    }
}