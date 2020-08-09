import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



export const Dialogs = (props) => {

    let arr = props.state.dialogs.map((dat) => {
        return (
            <DialogItem name={dat.name} id={dat.id}/>
        )
    })

    let newMes = React.createRef()
    let seeMes = ()=>{
        alert(newMes.current.value)
    }

    let messagesEl = props.state.messages.map(mes => <Message message={mes.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {arr}
            </div>

            <div className={s.messages}>
                {messagesEl}
                <textarea ref={newMes}></textarea>
                <button onClick={seeMes}>add mess</button>
            </div>

        </div>
    )
}