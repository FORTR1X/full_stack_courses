import React from 'react';
import s from './Select.module.css';

const Select = (props) => {
  return (
      <div className={s.select__content}>
        <span className={s.select__label}>{props.label}</span>
        <select className={s.select} value={props.value} onChange={event => props.onChange(event)}>
          <option disabled hidden>Не выбрано</option>
          {props.handle}
        </select>
      </div>
  );
};

export default Select;