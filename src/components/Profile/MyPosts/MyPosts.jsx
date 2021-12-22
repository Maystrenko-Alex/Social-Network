import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  debugger
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likeCount='15'/>
        <Post message='Its my first post!'likeCount='20'/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}