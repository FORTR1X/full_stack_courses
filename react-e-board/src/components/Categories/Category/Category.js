import React from 'react';
import s from './Category.module.css';

const Category = (props) => {

  return (
        <div className={s.category}>
          <a className={s.categoryName} href={`${props.urlCategory}`}>
            <div className={`${s.categoryLogoEclipse} ${s.categoryLogo}`}>
              <img className={s.categoryLogo} src={props.imgPath} alt={''}/>
            </div>
            {props.nameCategory}
          </a>
        </div>
  );
};

export default Category;