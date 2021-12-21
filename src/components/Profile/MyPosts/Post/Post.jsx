import React from "react";
import s from './Post.module.css';

export const Post = () => {
  return (
    <div className={s.item}>
      <img src='http://i.imgur.com/HU0OB.jpg' alt='ava' />
      post
      <div>
        <span>like</span>
      </div>
    </div>
  );
}