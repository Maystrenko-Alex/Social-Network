import React from "react";
import { Post } from "./MyPosts/Post/Post";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} />
    </div>
  );
}