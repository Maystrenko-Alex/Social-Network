import React from "react";
import s from './MyPosts.module.css';
import { Post } from "./Post/Post";

export const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 0 },
    { id: 2, message: 'Its my first post!', likesCount: 20 },
    { id: 2, message: 'Blabla', likesCount: 20 },
    { id: 2, message: 'Dada', likesCount: 20 }
  ]
  let postsElements = postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/> )
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}