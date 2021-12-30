import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import { Message } from "./Message/Message";

export const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />) 

  let messagesElements = props.messageData.map( item => (<Message message={item.message} />) )

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

