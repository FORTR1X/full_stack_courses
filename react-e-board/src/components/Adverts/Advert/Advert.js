import React from 'react';

import s from './Advert.module.css';
import {NavLink} from "react-router-dom";

const Advert = (props) => {

  //adId, description, header, owner, price, subId, createdAd, lastUpdatedAt, photos[]
  let dateArr = [];
  if (props.createdAt !== null && props.createdAt !== 'Нет информации')
    dateArr = props.createdAt.match(/^\d{4}.\d{2}.\d{2}/)[0].split('-');

  let date = dateArr.length === 3 ? `${dateArr[2]}.${dateArr[1]}.${dateArr[0]} г.` : props.createdAt;

  return (
      <NavLink to={`/ad/id${props.adId}`} className={s.navLinkTo}>
        <div className={s.container}>
          <div className={s.photo} style={{backgroundImage: `url("${props.photos[0]}")`}}/>

          <div className={s.info}>
            <span className={s.nameAd}>{props.header}</span>

            <span className={s.price}>{props.price} ₽</span>
            <span className={s.description}>{props.description}</span>
            <span className={s.datePublish}>{date}</span>
          </div>
        </div>
      </NavLink>
  );
};

export default Advert;