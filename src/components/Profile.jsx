import React from "react";
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
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post1
          </div>
          <div className={s.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  );
}