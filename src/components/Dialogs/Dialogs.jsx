import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export const Dialogs = () => {
  
  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]; 
  
  let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ];

  let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />) 

  let messagesElements = messageData.map( item => (<Message message={item.message} />) )

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

const DialogItem = (props) => {
  let path = "/dialogs" + props.id;
  
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink
        to={path}
        style={({ isActive }) => ({ color: isActive ? "gold" : "white" })}>{props.name}
      </NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}