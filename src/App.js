import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom"
import "./all.sass"

import {useRoutes} from "./routes"
import {AdminPanel} from "./utils/AdminPanel";
import {AddQuest} from "./components/AddQuest/AddQuest";
import {Errors} from "./components/Error/Errors";
import fbase from "./firebase";


const App = () => {

    const [token, setToken] = useState(null)
    const routes = useRoutes(token)

    //USER SESSION
    useEffect(() => {
        fbase.auth().onAuthStateChanged(user => {
            if(user)  setToken(user.uid)
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

                <Errors />
            </div>

    )
}

export default App;
