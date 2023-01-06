import React, {useEffect} from 'react';

import s from './CreateAd.module.css'
import OptionalSelector from "./OptionalSelector/OptionalSelector";
import SpaceLine from "../SpaceLine";
import MainCharacteristic from "./MainCharacteristic/MainCharacteristic";
import Characteristics from "./Characteristics/Characteristics";
import {createCharacteristic} from "../../store/Actions/CreateAdActions";
import {Navigate, useLocation} from "react-router-dom";

const CreateAd = (props) => {

  let optionCategories = props.categoriesOption;
  let optionSubCategories = props.subcategoriesOption

  let selectCategory = props.category;
  let selectSubCategory = props.subcategory;

  useEffect(() => {
    if (optionCategories.length === 0)
      props.getCategories();
  }, [optionCategories]);

  useEffect( () => {
    if (optionSubCategories.length === 0)
      props.getSubCategories();
  }, [optionSubCategories]);

  const onChangeCategory = (event) => {
    props.changeCategory(event.target.value);
  }
  const onChangeSubCategory = (event) => {
    props.changeSubCategory(event.target.value);
  }

  const getCurrentCategoryId = (cat) => {
    let catId;
    optionCategories.map(category => {
      if (category.option == cat) {
        catId = category.id;
      }
    })

    return catId;
  }

  const getCurrentSubCat = () => {

    for (let i = 0; i < optionSubCategories.length; i++) {
      if (selectSubCategory === optionSubCategories[i].option) {
        return optionSubCategories[i];
      }
    }
    return null;
  }

  const getSubCategoriesByCategory = () => {
    const catId = getCurrentCategoryId(selectCategory);
    let subCatList = [];

    if (catId > 0) {
      optionSubCategories.map(subcat => {
        if (subcat.categoryId === catId) {
          subCatList.push(subcat);
        }
      });

      return subCatList;
    } else { return null; }

  }

  let listItemsToOptions = (listItems) => {
    return listItems.map(el => <option key={el.id} value={el.option}>{el.option}</option>);
  }

  return (
      <div className={s.content}>
        <h3 className={s.text}>Добавление объявления</h3>
        <div className={s.container}>
          <div className={s.contentForms}>

            <form className={s.form}>
              <OptionalSelector label={'Категория '} options={listItemsToOptions(optionCategories)}
                                value={selectCategory} handle={onChangeCategory}/>
              {selectCategory !== 'Не выбрано' &&
                  <OptionalSelector label={'Подкатегория '} options={listItemsToOptions(getSubCategoriesByCategory())}
                                    value={selectSubCategory} handle={onChangeSubCategory}/>
              }
              <SpaceLine width={600}/>
              <MainCharacteristic store={props}/>

              {selectSubCategory !== 'Не выбрано' &&
                  <Characteristics newAdvert={props.newAdvert}
                                   createCharact={props.createCharacteristic}
                                   createAdvert={props.createAdvert}
                                   type={getCurrentSubCat()}
                                   store={props}/>
              }
            </form>

            {props.newAdvert !== null && props.newCharact !== null &&
                <Navigate to={`/edit/advert/id${props.newAdvert.adId}`}/>
            }

          </div>
        </div>
      </div>
  );
};

export default CreateAd;