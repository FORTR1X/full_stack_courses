import React from 'react';
import s from "./TextArea.module.css";

const TextArea = (props) => {
  return (
      <div className={s.textAreaContent}>
        <span className={s.label}>{props.name}</span>
        <textarea placeholder={'Описание'} value={props.value} onChange={props.handle} className={s.textArea}/>
      </div>
  );
};

export default TextArea;