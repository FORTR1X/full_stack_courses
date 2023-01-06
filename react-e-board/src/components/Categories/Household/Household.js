import React from 'react';
import s from "./Household.module.css";
import Category from "../Category/Category";
import Subcategories from "../Subcategories/Subcategories.js";

import archtectImg from '../architect.svg';
import autoImg from '../auto.svg';
import fridgeImg from '../fridge.svg';
import furnitureImg from '../furniture.svg';

const Household = (props) => {

  const immovables = props.catList[0];
  const transport = props.catList[1];
  const appliance = props.catList[2];
  const furniture = props.catList[3]

  return (
      <div>
        <h3>Выберите категорию</h3>
        <div className={s.content}>
          <div className={s.categories}>
            <Category nameCategory={immovables.categoryName} imgPath={archtectImg} urlCategory={immovables.categoryUrl}/>
            <Category nameCategory={transport.categoryName} imgPath={autoImg} urlCategory={transport.categoryUrl}/>
            <Subcategories nameSubCat={appliance.subcategories} imgPath={fridgeImg} urlSubcategory={appliance.subcategoryUrl}/>
            <Subcategories nameSubCat={furniture.subcategories} imgPath={furnitureImg} urlSubcategory={furniture.subcategoryUrl}/>
          </div>
        </div>
      </div>
  );
};

export default Household;