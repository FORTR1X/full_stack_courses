import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";

import s from './ViewAd.module.css';

import emptyImage from './empty_image.png';
import img from './exmpl.png';
import nullAvatar from '../../null.jpg';
import useLocalStorage from "../../hooks/useLocalStorage";

const ViewAd = (props) => {

  const params = useParams();
  const advert = props.advert;
  const category = props.category;
  const subcategory = props.subcategory;
  const user = props.owner;
  const characteristic = props.characteristic;
  const [token] = useLocalStorage(null, 'token');

  const [avatar, setAvatar] = useState(nullAvatar);

  useEffect( () => {

    if (advert.adId === undefined)
      props.getAdvert(params.id);

    if (props.tokenData === null && token !== "null")
      props.getTokenData(token);

  }, [advert, props.tokenData]);

  useEffect( () => {

    if (advert.subId !== undefined) {
      props.getCategory(advert.subId);
      props.getSubcategory(advert.subId);
      props.getCharacteristic(advert.adId);
      props.getOwner(advert.owner);
    }

  }, [props.advert]);

  useEffect( () => {

    if (props.owner.avatar !== null)
      setAvatar(props.owner.avatar);

  }, [props.owner]);

  const getCharacteristicOption = () => {
    switch (category.categoryId) {
      case 1:
        return <div className={s.ad__characteristic_list}>
        <span key={0}>Аренда: {characteristic.rent === true ? 'Да' : 'Нет'}</span>
        <span key={1}>Количество комнат: {characteristic.roomNumber}</span>
        <span key={2}>Месячная стоимость: {characteristic.monthlyCost}</span>
        {subcategory.subId === 1 && <span key={3}>Количество этажей: {characteristic.floorCount}</span>}
        {subcategory.subId === 2 && <span key={3}>Этаж: {characteristic.floor}</span>}
        {characteristic.rent && <span key={4}>Срок аренды {characteristic.rentPeriod === true ? 'Длительный' : 'Постуочный'}</span>}
      </div>

      case 2:
        return <div className={s.ad__characteristic_list}>
          <span key={0}>Марка: {characteristic.brand}</span>
          <span key={1}>Год выпуска: {characteristic.relaseYear}г.</span>
          <span key={2}>Пробег: {characteristic.milage} (км.)</span>
          <span key={3}>Объем двигателя: {characteristic.capacity} (л.)</span>
          {subcategory.subId === 3 && <span key={4}>Привод: {characteristic.wheelDrive}</span>}
          {subcategory.subId === 4 && <span key={4}>Количество передач: {characteristic.gearsCount}</span>}
        </div>

      case 3:
        return <div className={s.ad__characteristic_list}>
          <span key={0}>Марка: <small>{characteristic.brand}</small></span>
          <span key={1}>Год выпуска: {characteristic.relaseYear}г.</span>
          <span key={2}>Б/у: {characteristic.wasInUse === true ? 'Да' : 'Нет'}</span>
        </div>
    }
  }

  let images = advert.photos;
  const [mainPhoto, setMainPhoto] = useState(images === null ? emptyImage : images[0]);
  const handleSetMainPhoto = (img) => {
    setMainPhoto(img);
  }

  useEffect(() => {

    if (advert.photos !== null)
      setMainPhoto(advert.photos[0]);

  }, advert.photos)

  const showImages = () => {
    if (images === null)
      return <img src={emptyImage} className={s.ad__images_secondaryImg} alt={"empty img"}/>


    if (images.length > 1) {
      let id = 0;
      return images.map(img => {
        return <img src={img} alt={"img"} key={id++} className={s.ad__images_secondaryImg} onClick={event => handleSetMainPhoto(event.target.src)}/>
      });
    }

  }

  const [isToggleNumber, setIsToggleNumber] = useState(false);
  const handleSetIsToggleNumber = () => {
    setIsToggleNumber(!isToggleNumber);
  }

  return (
      <div className={s.ad}>
        <span className={s.ad__path}> Главная > {category.categoryName} > <span className={s.ad__path_endpoint}>{subcategory.subcategories}</span></span>
        <div className={s.ad__window}>

          <div className={s.ad__leftContent}>
            <span className={s.ad__header}>{advert.header}</span>
            <span className={s.ad__datePublish}>{advert.datePublish}</span>
            <div className={s.ad__images}>
              <img src={mainPhoto} alt={"Main image"} className={s.ad__images_mainImg}/>
              <div className={s.ad__images_otherImg}>
                {showImages()}
              </div>
            </div>
            <span className={s.ad__description_header}>Описание</span>
            <span className={s.ad__description_text}>{advert.description}</span>
          </div>

          <div className={s.ad__rightContent}>
            <span className={s.ad__price}>{advert.price} ₽</span>
            {!isToggleNumber && <button className={s.ad__btn} onClick={handleSetIsToggleNumber}>Показать номер</button>}
            {isToggleNumber && <span className={s.ad__phoneNumber}>{user.phoneNumber}</span>}
            <a href={`mailto:${user.email}?subject=e-board объявление&body=Здравствуйте, заинтересовало объявление - http://localhost:3000/ad/id${advert.adId}`} className={s.ad__activeBtn}>Написать</a>
            <div className={s.ad__user}>
              <NavLink to={`/user/id${props.owner.id}`}><img src={avatar} alt={"avatar"} className={s.ad__user_avatar}/></NavLink>
              <span className={s.ad__user_username}>{user.username}</span>
            </div>
            {props.tokenData !== null && advert.adId !== undefined && (props.tokenData.user_name === advert.owner || props.tokenData.authorities[0] === "ADMIN") &&
                <a href={`/edit/advert/id${advert.adId}`}><button className={s.ad__btn_edit} type={"button"}>Редактировать</button></a>
            }
          </div>

          <div className={s.ad__characteristic}>
            <span className={s.ad__characteristic_header}>Характеристики</span>
            {getCharacteristicOption()}
          </div>
        </div>
      </div>
  );
};

export default ViewAd;