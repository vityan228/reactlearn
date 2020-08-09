import React from 'react'
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


export const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let arr = state.dialogs.map((dat) => {
        return (
            <DialogItem name={dat.name} id={dat.id}/>
        )
    })
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    let messagesEl = state.messages.map(mes => <Message message={mes.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {arr}
            </div>
            <div className={s.messages}>
                {messagesEl}
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                ></textarea>
                <button onClick={onSendMessageClick}>add mess</button>
            </div>
        </div>
    )
}