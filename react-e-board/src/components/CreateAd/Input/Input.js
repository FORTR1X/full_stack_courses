import React, {useState} from 'react';
import s from "./Input.module.css";

const Input = (props) => {

  return (
      <div className={s.inputContent}>
        <span className={s.label}>{props.name}</span>
        <input className={s.input} type="text" value={props.value} onChange={(event => props.handle(event))}/>
      </div>
  );
};

export default Input;