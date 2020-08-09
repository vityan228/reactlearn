import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s375"
                 alt=""/>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}


