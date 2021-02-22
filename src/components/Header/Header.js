import React, {useCallback} from "react"
import "./Header.sass"
import {useDispatch} from "react-redux";

import {openAddModal} from "../../store/reducers/modalAdd"

import {Level} from "../Player/Level/Level";
import {Stats} from "../Player/Stats/Stats";
import {Effect} from "../Player/Effect/Effect";
import {Info} from "../Player/Info/Info";
import {NavLink} from "react-router-dom";

export const Header = props => {
    //config
    const dispatch = useDispatch();


    //methods
    //const openModalAdd = () => { dispatch(openAddModal()) }

    return(
        <div className="component-header">
            <div className="inn">
                <aside className="player-components">

                    {/*PLAYER LEVEL*/}
                    <Level />

                    {/*PLAYER STATS*/}
                    <Stats />

                    {/*PLAYER EFFECT*/}
                    <Effect />

                    {/*PLAYER INFO*/}
                    <Info />

                    <ul className="player-routes">
                        <li><NavLink to="/status" /> <span>Статус</span></li>
                        <li><NavLink to="/status" /> <span>Инвентарь</span></li>
                        <li><NavLink to="/status" /> <span>Способности</span></li>

                    </ul>

                </aside>
                <aside className="option">
                    <figure></figure>
                    <div className="menu"><span></span><span></span><span></span></div>
                </aside>
            </div>
        </div>
    )
}