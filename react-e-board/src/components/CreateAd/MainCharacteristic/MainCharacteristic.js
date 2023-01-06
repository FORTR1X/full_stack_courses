import React, {useState} from 'react';
import s from "./MainCharacteristic.module.css";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

import store from "../../../store/redux-store";
import {
  changeDescription,
  changeHeader,
  changePrice,
} from "../../../store/Reducers/CreateAdReducer";

const MainCharacteristic = (props) => {

  const onChangeDescription = (event) => {
    props.store.changeDescription(event.target.value);
  }

  const onChangePrice = (event) => {
    props.store.changePrice(event.target.value);
  }

  const onChangeHeader = (event) => {
    props.store.changeHeader(event.target.value);
  }

  let description = props.store.description;
  let price = props.store.price;
  let header = props.store.header;

  return (
      <div className={s.mainCharacteristic}>
        <Input name={'Название объявления '} value={header} handle={onChangeHeader}/>
        <Input name={'Цена (руб.) '} value={price} handle={onChangePrice}/>
        <TextArea name={'Описание '} value={description} handle={onChangeDescription}/>
      </div>
  );
};

export default MainCharacteristic;