import React from "react"
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Header} from "../components/Header/Header";

export const AdminPanel = ({userAuth}) => {
    if(userAuth){
        return(
            <>
                <Sidebar />
                <Header />
            </>
        )
    } else {
        return null
    }
}