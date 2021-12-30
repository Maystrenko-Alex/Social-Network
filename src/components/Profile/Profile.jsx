import React from "react";
import { Post } from "./MyPosts/Post/Post";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
  // let postsData = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 0 },
  //   { id: 2, message: 'Its my first post!', likesCount: 20 },
  //   { id: 2, message: 'Blabla', likesCount: 20 },
  //   { id: 2, message: 'Dadada', likesCount: 20 }
  // ]
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>
  );
}