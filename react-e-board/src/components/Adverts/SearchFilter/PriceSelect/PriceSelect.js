import React from 'react';
import s from "./PriceSelect.module.css";

const PriceSelect = (props) => {

  const handleOnChangeEnd = (event) => {
    props.onChange({priceStart: props.value.priceStart, priceEnd: parseInt(event.target.value)});
  }

  const handleOnChangeStart = (event) => {
    props.onChange({priceStart: parseInt(event.target.value), priceEnd: props.value.priceEnd})
  }

  return (
      <div className={s.template__price}>
        <span className={s.template__price_label}>Цена</span>
        <div className={s.template__price_inputs}>
          <input className={s.template__price_start} type="number" min={0} placeholder={'Цена от'} value={props.value.priceStart} onChange={event => handleOnChangeStart(event)}/>
          <input className={s.template__price_end} type="number" min={0} placeholder={'Цена до'} value={props.value.priceEnd} onChange={event => handleOnChangeEnd(event)}/>
        </div>
      </div>
  );
};

export default PriceSelect;