import React from 'react';
import s from "./Transport.module.css";
import Category from "../Category/Category";
import Subcategories from "../Subcategories/Subcategories";

import archirectImg from '../architect.svg';
import autoImg from '../auto.svg';
import motoImg from '../moto.svg';
import householdImg from '../household.svg';

const Transport = (props) => {

  const immovables = props.catList[0];
  const cars = props.catList[1];
  const moto = props.catList[2];
  const household = props.catList[3];

  return (
      <div>
        <h3>Выберите категорию</h3>
        <div className={s.content}>
          <div className={s.categories}>
            <Category nameCategory={immovables.categoryName} imgPath={archirectImg} urlCategory={immovables.categoryUrl}/>
            <Subcategories nameSubCat={cars.subcategories} imgPath={autoImg} urlSubcategory={cars.subcategoryUrl}/>
            <Subcategories nameSubCat={moto.subcategories} imgPath={motoImg} urlSubcategory={moto.subcategoryUrl}/>
            <Category nameCategory={household.categoryName} imgPath={householdImg} urlCategory={household.categoryUrl}/>
          </div>
        </div>
      </div>
  );
};

export default Transport;