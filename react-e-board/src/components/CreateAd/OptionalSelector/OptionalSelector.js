import React from 'react';
import s from "./OptionalSelector.module.css";

const OptionalSelector = (props) => {

  return (
      <div className={s.formContent}>
        <label className={s.label} >{props.label}</label>
        <select className={s.selector} value={props.value} onChange={(event => {props.handle(event)})}>
          <option disabled hidden>Не выбрано</option>
          {props.options}
        </select>
      </div>
  );
};

export default OptionalSelector;