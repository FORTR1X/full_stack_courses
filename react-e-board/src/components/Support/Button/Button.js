import React from 'react';
import s from "./Button.module.css";

const Button = (props) => {
  return (
      <a href={props.to} className={s.supp_btn}>
        <div className={s.supp_btn_content}>
          <span className={s.btn__text}>{props.text} <img className={s.supp_btn_img} src={props.src} alt={props.alt}/></span>
        </div>
      </a>
  );
};

export default Button;