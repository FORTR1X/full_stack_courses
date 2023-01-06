import React, {useEffect, useRef, useState} from 'react';
import Input from "../Input/Input";
import OptionalSelector from "../OptionalSelector/OptionalSelector";
import SpaceLine from "../../SpaceLine";

import s from "./Characteristics.module.css";
import {NavLink, useLocation, useParams} from "react-router-dom";
import convertToBase64 from "../../../convertToBase64";

import axios from "axios";
import {updateCharact} from "../../../store/Actions/EditAdvertActions";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Characteristics = (props) => {

  const location = useLocation().pathname;
  const adId = parseInt(useParams().id);

  let rent = props.store.rent;
  const onChangeRent = (event) => { props.store.changeRent(event.target.value); }

  let rentPeriod = props.store.rentPeriod;
  const onChangeRentPeriod = (event) => { props.store.changeRentPeriod(event.target.value); }

  let roomNumber = props.store.roomNumber;
  const onChangeRoomNumber = (event) => { props.store.changeRoomNumber(event.target.value); }

  let stage = props.store.stage;
  const onChangeStage = (event) => { props.store.changeStage(event.target.value); }

  let brand = props.store.brand;
  const onChangeBrand = (event) => { props.store.changeBrand(event.target.value); }

  let relaseYear = props.store.relaseYear;
  const onChangeRelaseYear = (event) => { props.store.changeRelaseYear(event.target.value); }

  let milage = props.store.milage;
  const onChangeMilage = (event) => { props.store.changeMilage(event.target.value); }

  let capacity = props.store.capacity;
  const onChangeCapacity = (event) => { props.store.changeCapacity(event.target.value); }

  let wheelDrive = props.store.wheelDrive;
  const onChangeWheelDrive = (event) => { props.store.changeWheelDrive(event.target.value); }

  let gears = props.store.gears;
  const onChangeGears = (event) => { props.store.changeGears(event.target.value); }

  let wasInUse = props.store.wasInUse;
  const onChangeWasInUse = (event) => { props.store.changeWasInUse(event.target.value); }

  let monthlyCost = props.store.monthlyCost;
  const onChangeMonthlyCost = (event) => { props.store.changeMonthlyCost(event.target.value); }

  let listItemsToOptions = (listItems) => {
    return listItems.map(el => <option key={el.id} value={el.option}>{el.option}</option>);
  };

  const [token] = useLocalStorage('', 'token')

  const [fileNameList, setFileNameList] = useState([]);
  let imgList;
  if (fileNameList.length > 0)
    imgList = <div>{fileNameList.toString()}</div>
  else
    imgList = <div>Файлы не выбраны!</div>

  let fileList = useRef();
  const setImages = () => {
    let fileNameList = [];
    for (let i = 0; i < fileList.current.files.length; i++) {
      fileNameList[i] = fileList.current.files[i].name;
    }
    setFileNameList(fileNameList);
  }

  const createOrUpdateAdvert = async () => {
    if (token === null)
      return;

    let listPhotoBase64 = [];
    if (fileList.current.files.length > 0) {
      let files = fileList.current.files;
      for (let i = 0; i < files.length; i++) {
        listPhotoBase64[i] = await convertToBase64(files[i]);
      }
    }

    const advert = {
      header: props.store.header,
      description: props.store.description,
      price: props.store.price,
      subId: props.type.id,
      photos: listPhotoBase64
    }

    if (adId) {
      props.updateAdvert({ adId, advert, token });
    } else {
      props.createAdvert({ advert, token });
    }
  }

  useEffect(() => {
    if (props.store.newAdvert && isNaN(adId))
      createOrUpdateCharact({ adId: props.store.newAdvert.adId, subId: props.store.newAdvert.subId, createCharact: props.createCharact });
    if (props.store.newAdvert && !isNaN(adId)) {
      createOrUpdateCharact({ adId, subId: props.store.newAdvert.subId, updateCharact: props.store.updateCharact });
    }
  }, [props.store.newAdvert]);

  const createOrUpdateCharact = async (props) => {
    let characteristic = {};
    switch (props.subId) {
      case 1:
        characteristic = {
          adId: parseInt(props.adId),
          rent: rent === 'Да',
          rentPeriod: rentPeriod === 'Посуточный',
          roomNumber: parseInt(roomNumber),
          monthlyCost: parseInt(monthlyCost),
          floorCount: parseInt(stage),
          subId: parseInt(props.subId)
        }
        break;
      case 2:
        characteristic = {
          adId: parseInt(props.adId),
          rent: rent === 'Да',
          roomNumber: parseInt(roomNumber),
          monthlyCost: parseInt(monthlyCost),
          floor: parseInt(stage),
          subId: parseInt(props.subId),
          rentPeriod: rentPeriod === 'Посуточный'
        }
        break;

      case 3:
        characteristic = {
          adId: parseInt(props.adId),
          brand,
          relaseYear: parseInt(relaseYear),
          milage: parseInt(milage),
          capacity: parseFloat(capacity),
          wheelDrive,
          subId: parseInt(props.subId)
        }
        break;

      case 4:
        characteristic = {
          adId: parseInt(props.adId),
          brand,
          relaseYear: parseInt(relaseYear),
          milage: parseInt(milage),
          capacity: parseFloat(capacity),
          gearsCount: parseInt(gears),
          subId: parseInt(props.subId)
        }
        break;

      case 5: case 6:
        characteristic = {
          adId: parseInt(props.adId),
          brand,
          relaseYear: parseInt(relaseYear),
          wasInUse: wasInUse === 'Да',
          subId: parseInt(props.subId)
        }
        break;
    }

    if (isNaN(adId))
      props.createCharact({ token, characteristic });

    if (!isNaN(adId))
      props.updateCharact({ token, characteristic, adId });
  }

  const handleDeleteAdvert = () => {
    props.deleteAdvert({adId, token});
  }

  return (
      <div className={s.characteristics}>
        <SpaceLine width={600}/>

        {props.type.id === 1 && <div>
          <OptionalSelector label={'Аренда'} value={rent} handle={onChangeRent} options={listItemsToOptions(props.store.boolOption)}/>
          {rent === 'Да' && <OptionalSelector label={'Срок аренды'} value={rentPeriod} handle={onChangeRentPeriod} options={listItemsToOptions(props.store.rentOption)}/>}
          <Input name={'Месячная стоимость'} value={monthlyCost} handle={onChangeMonthlyCost}/>
          <Input name={'Количество комнат'} value={roomNumber} handle={onChangeRoomNumber}/>
          <Input name={'Количество этажей'} value={stage} handle={onChangeStage}/>
        </div>}
        {props.type.id === 2 && <div>
          <OptionalSelector label={'Аренда'} value={rent} handle={onChangeRent} options={listItemsToOptions(props.store.boolOption)}/>
          {rent === 'Да' && <OptionalSelector label={'Срок аренды'} value={rentPeriod} handle={onChangeRentPeriod} options={listItemsToOptions(props.store.rentOption)}/>}
          <Input name={'Месячная стоимость'} value={monthlyCost} handle={onChangeMonthlyCost}/>
          <Input name={'Количество комнат'} value={roomNumber} handle={onChangeRoomNumber}/>
          <Input name={'Этаж'} value={stage} handle={onChangeStage}/>
        </div>}
        {props.type.id === 3 && <div>
          <Input name={'Марка'} value={brand} handle={onChangeBrand}/>
          <Input name={'Год выпуска'} value={relaseYear} handle={onChangeRelaseYear}/>
          <Input name={'Пробег (км.)'} value={milage} handle={onChangeMilage}/>
          <Input name={'Объем двигателя'} value={capacity} handle={onChangeCapacity}/>
          <OptionalSelector label={'Привод'} value={wheelDrive} handle={onChangeWheelDrive} options={listItemsToOptions(props.store.wheelDriveOption)}/>
        </div>}
        {props.type.id === 4 && <div>
          <Input name={'Марка'} value={brand} handle={onChangeBrand}/>
          <Input name={'Год выпуска'} value={relaseYear} handle={onChangeRelaseYear}/>
          <Input name={'Пробег (км.)'} value={milage} handle={onChangeMilage}/>
          <Input name={'Объем двигателя'} value={capacity} handle={onChangeCapacity}/>
          <OptionalSelector label={'Количество передач'} value={gears} handle={onChangeGears} options={listItemsToOptions(props.store.gearsOption)}/>
        </div>}
        {(props.type.id === 5 || props.type.id === 6) && <div>
          <OptionalSelector label={'Б/у'} value={wasInUse} handle={onChangeWasInUse} options={listItemsToOptions(props.store.boolOption)}/>
          <Input name={'Марка'} value={brand} handle={onChangeBrand}/>
          <Input name={'Год выпуска'} value={relaseYear} handle={onChangeRelaseYear}/>
        </div>}
        {props.type.id > 0 &&
            <span>
              <div className={s.uploadFiles}>
                <label className={s.uploadFiles__label}>Перетащите файл для загрузки, или <span className={s.uploadFiles__label_chose}>выберите</span></label>
                <input ref={fileList} className={s.uploadFiles__input} id="imageUploads" type="file" accept={'.jpg, ,jpeg, .png'} multiple onChange={setImages}/>
              </div>
              <div className={s.listFiles}>
                {imgList}
              </div>
            </span>
        }
        {location.includes('/ad/create') && !location.includes('/edit/advert/id') &&
            <div className={s.btn__create_container}>
              <button type={"button"} className={`${s.btn} ${s.link}`} onClick={createOrUpdateAdvert}>Создать</button>
            </div>
        }
        {!location.includes('/ad/create') && location.includes('/edit/advert/id') &&
            <div className={s.btn__update_container}>
              <button type={"button"} className={`${s.btn} ${s.btn_del}`} onClick={handleDeleteAdvert}>Удалить</button>
              <button type={"button"} className={`${s.btn} ${s.link}`} onClick={createOrUpdateAdvert}>Обновить</button>
            </div>
        }
      </div>
  );
};

export default Characteristics;