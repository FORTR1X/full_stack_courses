import React from 'react';
import s from './Hint.module.css';

import close from './close.svg';

const Hint = (props) => {
  setInterval(() => {
    props.handle();
  }, 10000);

  return (

      <div className={s.modal}>
        <div className={s.modal__content}>
          <span className={s.modal__text}>{props.text}
            <img className={s.modal__img} onClick={props.handle} src={close} alt="close"/>
          </span>
        </div>
      </div>
  );
};

export default Hint;