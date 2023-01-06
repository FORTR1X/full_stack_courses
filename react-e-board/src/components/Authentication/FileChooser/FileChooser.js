import React from 'react';
import s from "./FileChooser.module.css";

const FileChooser = (props) => {
  const width = props.width <= 0 ? '100px' : `${props.width}px`;

  return (
      <div>
        <span className={s.fchoose__photoProfile}>Фотография профиля</span>

        <div className={s.fchoose}>
          <span style={{width}} className={s.fchoose__label}>{props.list}</span>
          <input className={s.fchoose__input} ref={props.refer} type="file" accept={'.jpg, ,jpeg, .png'} onChange={props.handle}/>
          <button className={s.fchoose__btn}>Выбрать</button>
        </div>
      </div>
  );
};

export default FileChooser;