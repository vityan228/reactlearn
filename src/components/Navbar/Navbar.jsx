import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar=()=>{
    return(
        <nav>
            <div className={s.nav_wrapper}>

                <ul className={s.left_bar}>
                    <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}