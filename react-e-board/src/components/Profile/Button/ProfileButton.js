import React from 'react';
import {NavLink} from "react-router-dom";
import s from './ProfileButton.module.css';

const ProfileButton = (props) => {
  const handleOnClick = () => {
    if (props.handle)
      props.handle();
  }

  return (
      <div onClick={handleOnClick}>
        <NavLink className={s.btn__link} to={props.to}>
          <div className={s.btn}><img src={props.src} alt={props.alt}/>{props.text}</div>
        </NavLink>
      </div>
  );
};

export default ProfileButton;