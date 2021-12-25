import React from "react";
import s from './Post.module.css';

export const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='http://i.imgur.com/HU0OB.jpg' alt='ava' />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}