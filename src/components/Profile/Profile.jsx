import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img alt='images' src='https://images.ctfassets.net/hrltx12pl8hq/3BkYwz5RAnnN1Q2k7FYMir/5bc8172b8597e5c3d7fe02daa15dd371/Flex_lite_CMS_LIHP.jpg?fit=fill&w=840&h=350' />
      </div>
      <div>
        Ava+description
      </div>
      <MyPosts />
    </div>
  );
}