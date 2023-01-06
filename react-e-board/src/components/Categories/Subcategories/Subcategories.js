import React from 'react';
import s from './Subcategories.module.css';

const Subcategories = (props) => {

  return (
      <div className={s.subCat}>
        <a className={s.categoryName} href={`${props.urlSubcategory}`}>
          <div className={`${s.categoryLogoEclipse} ${s.categoryLogo}`}>
            <img className={s.categoryLogo} src={props.imgPath} alt={''}/>
          </div>
          {props.nameSubCat}
        </a>
      </div>
  );
};

export default Subcategories;