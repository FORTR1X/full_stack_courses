import React from 'react';
import s from "./Button.module.css";
import {NavLink} from "react-router-dom";

const Button = (props) => {
  const handleOnClick = () => {
    props.closeMenu();
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

export default Button;