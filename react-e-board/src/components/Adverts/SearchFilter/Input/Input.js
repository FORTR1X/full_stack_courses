import React from 'react';
import s from './Input.module.css';

const Input = (props) => {

  return (
      <div className={s.input}>
        <span className={s.input__label}>{props.label}</span>
        <input type="text" className={s.input__input} value={props.value} placeholder={props.placeholder ? props.placeholder : ''} onChange={event => props.onChange(event)}/>
      </div>
  );
};

export default Input;