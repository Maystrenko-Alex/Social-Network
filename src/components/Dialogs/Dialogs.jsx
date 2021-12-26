import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export const Dialogs = () => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name='Dimych' id='1' />
        <DialogItem name='Andrey' id='2' />
        <DialogItem name='Sveta' id='3' />
        <DialogItem name='Sasha' id='4' />
        <DialogItem name='Viktor' id='5' />
        <DialogItem name='Valera' id='6' />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='How is your it-kamasutra' />
        <Message message='Yo' />
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