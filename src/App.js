import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom"
import "./all.sass"

import {useRoutes} from "./routes"
import {AdminPanel} from "./utils/AdminPanel";
import {AddQuest} from "./components/AddQuest/AddQuest";
import {Errors} from "./components/Ui/Error/Errors";
import fbase from "./firebase";
import {Loader} from "./components/Ui/Loader/Loader";


const App = props => {
    const [token, setToken] = useState(null)
    const [isAdmin, setAdmin] = useState(false)
    const routes = useRoutes(token, isAdmin)

    //USER SESSION
    useEffect(() => {
        fbase.auth().onAuthStateChanged(user => {
            if(user)  {
                setToken(user.uid)
                setAdmin(user.email === "sergeyoffkey@gmail.com")
                console.log(isAdmin)
            }
            else setToken(null)
        })
    }, [])


    return(
            <div className="app">

                {/* APP ROUTING */}
                <BrowserRouter>
                    <AdminPanel userAuth={token} />
                    <div className="containeer">
                        {routes}
                    </div>
                </BrowserRouter>

                <AddQuest />

                {/*MODAL ERRORS*/}
                <Errors />

                {/* MODAL LOADER */}
                <Loader />
            </div>

    )
}

export default App;
