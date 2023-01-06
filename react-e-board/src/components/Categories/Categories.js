import React from 'react';
import s from './Categories.module.css'
import Category from "./Category/Category";

import archtectImg from './architect.svg';
import autoImg from './auto.svg';
import householdImg from './household.svg'

const Categories = (props) => {

  const immovables = props.catList[0];
  const transport = props.catList[1];
  const household = props.catList[2];

  return (
      <div className={s.categories__window}>
        <h3>Выберите категорию</h3>
        <div className={s.categories__content}>
          <div className={s.categories}>
            <Category nameCategory={immovables.categoryName} imgPath={archtectImg} urlCategory={immovables.categoryUrl} className={s.categories}/>
            <Category nameCategory={transport.categoryName} imgPath={autoImg} urlCategory={transport.categoryUrl} className={s.categories}/>
            <Category nameCategory={household.categoryName} imgPath={householdImg} urlCategory={household.categoryUrl} className={s.categories}/>
          </div>
        </div>
      </div>
  );
};

export default Categories;