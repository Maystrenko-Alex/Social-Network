import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img alt='images' src='https://images.ctfassets.net/hrltx12pl8hq/3BkYwz5RAnnN1Q2k7FYMir/5bc8172b8597e5c3d7fe02daa15dd371/Flex_lite_CMS_LIHP.jpg?fit=fill&w=840&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        Ava+description
      </div>
    </div>
  );
}