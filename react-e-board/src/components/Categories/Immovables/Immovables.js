import React from 'react';
import s from "./Immovables.module.css";
import Category from "../Category/Category";
import Subcategories from "../Subcategories/Subcategories";

import archirect from '../architect.svg';
import room from '../room.svg';
import auto from '../auto.svg';
import items from '../household.svg';

const Immovables = (props) => {

  const appartaments = props.catList[0];
  const houses = props.catList[1];
  const transport = props.catList[2];
  const household = props.catList[3];

  return (
      <div>
        <h3>Выберите категорию</h3>
        <div className={s.content}>
          <div className={s.categories}>
            <Subcategories nameSubCat={appartaments.subcategories} imgPath={room} urlSubcategory={appartaments.subcategoryUrl}/>
            <Subcategories nameSubCat={houses.subcategories} imgPath={archirect} urlSubcategory={houses.subcategoryUrl}/>
            <Category nameCategory={transport.categoryName} imgPath={auto} urlCategory={transport.categoryUrl}/>
            <Category nameCategory={household.categoryName} imgPath={items} urlCategory={household.categoryUrl}/>
          </div>
        </div>
      </div>
  );
};

export default Immovables;