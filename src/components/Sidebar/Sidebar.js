import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./Sidebar.sass"
import {unsetUser} from "../../store/reducers/auth";
import fbase from "../../firebase";

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        fbase.auth().signOut()
        dispatch(unsetUser())
    }
    return(
        <div className="component-sidebar">
            <ul className="sidebar-nav">
                <li>
                    <NavLink to="/">
                        <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.1668 31.8333V12.3615L20.5001 3.76147L4.83342 12.3615V31.8333H12.6667V26.9062C12.6667 25.0055 13.492 23.1826 14.9611 21.8386C16.4301 20.4946 18.4226 19.7396 20.5001 19.7396C22.5776 19.7396 24.5701 20.4946 26.0391 21.8386C27.5081 23.1826 28.3334 25.0055 28.3334 26.9062V31.8333H36.1668ZM24.4168 35.4166V26.9062C24.4168 25.9559 24.0041 25.0444 23.2696 24.3724C22.5351 23.7004 21.5388 23.3229 20.5001 23.3229C19.4613 23.3229 18.4651 23.7004 17.7306 24.3724C16.9961 25.0444 16.5834 25.9559 16.5834 26.9062V35.4166H4.83342C3.79465 35.4166 2.79843 35.0391 2.06391 34.3671C1.3294 33.6951 0.916748 32.7837 0.916748 31.8333V12.3615C0.916742 11.7427 1.09188 11.1344 1.42512 10.596C1.75835 10.0575 2.23832 9.60713 2.81829 9.28876L18.485 0.68876C19.0937 0.354611 19.7902 0.178101 20.5001 0.178101C21.21 0.178101 21.9065 0.354611 22.5152 0.68876L38.1819 9.28876C38.7618 9.60713 39.2418 10.0575 39.5751 10.596C39.9083 11.1344 40.0834 11.7427 40.0834 12.3615V31.8333C40.0834 32.7837 39.6708 33.6951 38.9363 34.3671C38.2017 35.0391 37.2055 35.4166 36.1668 35.4166H24.4168Z" fill="#FCFCFC"/>
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="34" height="34" preserveAspectRatio="xMinYMin" fill="#fff" className="icon__icon">
                            <path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path>
                        </svg>
                    </NavLink>
                </li>
            </ul>

            <div className="logout-btn" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 24 24" width="32" height="32" preserveAspectRatio="xMinYMin" className="icon__icon" fill="#fff">
                    <path d="M3.414 7.828h5.642a1 1 0 1 1 0 2H3.414l1.122 1.122a1 1 0 1 1-1.415 1.414L.293 9.536a.997.997 0 0 1 0-1.415L3.12 5.293a1 1 0 0 1 1.415 1.414L3.414 7.828zM13 0a1 1 0 0 1 1 1v16a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z" />
                </svg>
            </div>
        </div>
    )
}