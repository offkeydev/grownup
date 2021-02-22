import React from "react";
import "./loader.sass"
import {useSelector} from "react-redux";
import loader from "../../../img/loader.svg"

export const Loader = () => {
        const load = useSelector(state => state.loader.loader)
        console.log(load)
        return(
            <div className={load  ? "loader open" : "loader"}>
                <div className="load-image">
                    <img src={loader} alt=""/>
                </div>
            </div>
        )

}