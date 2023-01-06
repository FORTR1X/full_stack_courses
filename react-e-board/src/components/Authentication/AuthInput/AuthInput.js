import React from 'react';
import s from "./AuthInput.module.css";

const AuthInput = (props) => {
  let placeholder = props.placeholder === '' ? '' : props.placeholder;
  let type = props.type === '' ? 'text' : props.type;
  let borderStyle = props.danger === true && props.value !== '' ? {border: 'red 1px solid', color: 'red'} : {};
  let width = props.width === '' ? '100px' : `${props.width}px`;
  let fontSize = props.fontSize === '' ? `14px` : `${props.fontSize}px`;

  return (
      <div>
        <span style={{fontSize}} className={s.input__name}>{props.name}</span>
        <input style={{borderStyle, width}} className={s.input__item} type={type} placeholder={placeholder} value={props.value} onChange={event => props.handle(event)}/>
      </div>
  );
};

export default AuthInput;