import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export const Dialogs = () => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink 
            to={'/dialogs/Dimych'}
            style={({isActive}) => ({ color: isActive ? "gold" : "white"  })}>
          Dimych
          </NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink 
          to={'/dialogs/Andrey'} 
          style={({isActive}) => ({ color: isActive ? "gold" : "white"  })} >
          Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          Sveta
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
        <div className={s.dialog}>
          Viktor
        </div>
        <div className={s.dialog}>
          Valera
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
}