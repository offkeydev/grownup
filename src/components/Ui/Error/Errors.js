import React from "react"
import {useSelector} from "react-redux";
import "./Error.sass"
export const Errors = (props) => {
    const error = useSelector(state => state.errors.error);
    return(
        <div className={error ? "error-wrapp open" : "error-wrapp"}>
            <div className="inn-content">
                <p>{error ? error.message : null }</p>
            </div>
        </div>
    )
}