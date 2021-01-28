import React from "react"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from './store';

import {useRoutes} from "./routes"
import {AdminPanel} from "./utils/AdminPanel";
import {AddQuest} from "./components/AddQuest/AddQuest";

function App() {
    const routes = useRoutes(false)

    return(
        //Redux store
        <Provider store={store}>
            <div className="app">
                {/* APP ROUTING */}
                <BrowserRouter>
                    <AdminPanel userAuth={true} />
                    <div className="containeer"> {routes} </div>
                </BrowserRouter>

                <AddQuest />
            </div>
        </Provider>
    )
}

export default App;
