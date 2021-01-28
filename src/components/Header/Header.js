import React,{useCallback} from "react"
import "./Header.sass"
import {useDispatch} from "react-redux";

import {openAddModal} from "../../store/reducers/modalAdd"

import imQuest from "../../img/icons/quest.svg"

export const Header = props => {
    //config
    const dispatch = useDispatch();


    //methods
    const openModalAdd = () => { dispatch(openAddModal()) }




    return(
        <div className="component-header">
            <div className="user-stats">
                <span className="user-lvl">1</span>
                <div className="user-grow">
                    <i>Next LVL</i>
                    <div className="current">
                        <span>186</span> / <span>350</span>
                    </div>
                    <i>EXP</i>
                </div>
            </div>

            <div className="user">
                <button onClick={() => {openModalAdd()}}><img src={imQuest} alt="create-quest"/> Добавить квтест</button>
                <figure><img src="" alt=""/></figure>
                <p>username@gmail.com</p>
            </div>
        </div>
    )
}