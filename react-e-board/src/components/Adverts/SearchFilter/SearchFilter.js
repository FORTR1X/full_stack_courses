import React, {useEffect, useState} from 'react';
import s from './SearchFilter.module.css';
import Select from "./Select/Select";
import Input from "./Input/Input";
import PriceSelect from "./PriceSelect/PriceSelect";
import SpaceLine from "../../SpaceLine";
import {getAdsByFilter} from "../../../store/Actions/SearchFilterActions";

const SearchFilter = (props) => {

  let template = props.template;

  let rent = props.rent;
  const onChangeRent = (event) => { props.changeRent(event.target.value); template.rent = event.target.value === 'Да';}

  let rentPeriod = props.rentPeriod;
  const onChangeRentPeriod = (event) => { props.changeRentPeriod(event.target.value); template.rentPeriod = event.target.value === 'Посуточный'; }

  let roomNumber = props.roomNumber;
  const onChangeRoomNumber = (event) => { props.changeRoomNumber(event.target.value); template.roomNumber = parseInt(event.target.value); }

  let stage = props.stage;
  const onChangeStage = (event) => {
    props.changeStage(event.target.value);
    template.floor = parseInt(event.target.value);
    template.floorCount = parseInt(event.target.value);
  }

  let brand = props.brand;
  const onChangeBrand = (event) => { props.changeBrand(event.target.value); template.brand = event.target.value; }

  let relaseYear = props.relaseYear;
  const onChangeRelaseYear = (event) => { props.changeRelaseYear(event.target.value); template.relaseYear = parseInt(event.target.value); }

  let milage = props.milage;
  const onChangeMilage = (event) => { props.changeMilage(event.target.value); template.milage = parseInt(event.target.value); }

  let capacity = props.capacity;
  const onChangeCapacity = (event) => { props.changeCapacity(event.target.value); template.capacity = parseFloat(event.target.value); }

  let wheelDrive = props.wheelDrive;
  const onChangeWheelDrive = (event) => { props.changeWheelDrive(event.target.value); template.wheelDrive = event.target.value; }

  let gears = props.gears;
  const onChangeGears = (event) => { props.changeGears(event.target.value); template.gears = parseInt(event.target.value); }

  let wasInUse = props.wasInUse;
  const onChangeWasInUse = (event) => { props.changeWasInUse(event.target.value); template.wasInUse = event.target.value === "Да"; }

  let monthlyCost = props.monthlyCost;
  const onChangeMonthlyCost = (event) => { props.changeMonthlyCost(event.target.value); template.monthlyCost = parseInt(event.target.value); }

  const [categoryId, setCategoryId] = useState(0);
  const handleSetCategoryId = (id) => {
    setCategoryId(id);
  }

  const [chosedCategory, setChosedCategory] = useState('Не выбрано');
  const handleSetChosedCategory = (category) => {
    if (chosedSubcategory !== 'Не выбрано') {
      setChosedSubcategory('Не выбрано');
      setSubcategoryId(0);
    }

    handleSetCategoryId(parseInt(category.target.value));
    setChosedCategory(category.target.value);
  }


  const [subcategoryId, setSubcategoryId] = useState(0);
  const handleSetSubcategoryId = (id) => {
    setSubcategoryId(id);
  }

  const [chosedSubcategory, setChosedSubcategory] = useState('Не выбрано');
  const handleSetChosedSubcategory = (subcategory) => {
    handleSetSubcategoryId(parseInt(subcategory.target.value));
    setChosedSubcategory(subcategory.target.value);
  }

  const [price, setPrice] = useState({priceStart: 0, priceEnd: 0});
  const handleSetPrice = (price) => {
    setPrice(price);
    template.priceStart = price.priceStart;
    template.priceEnd = price.priceEnd;
  }

  console.log(template);

  const getSubcategoryListByCurrentCategory = () => {
    let subcategoryList = [];

    if (props.subcategoryList.length > 0) {
      for (let i = 0; i < props.subcategoryList.length; i++) {
        if (props.subcategoryList[i].categoryId === categoryId) {
          subcategoryList.push(props.subcategoryList[i]);
        }
      }
    }

    return subcategoryList;
  }

  const getCategoryOptions = () => {
    return props.categoryList.map(category => {
      return <option key={category.id} value={category.id}>{category.option}</option>
    })
  };

  const getSubcategoryOptions = () => {
    const subcategoryList = getSubcategoryListByCurrentCategory();

    return subcategoryList.map(subcategory => {
      return <option key={subcategory.id} value={subcategory.id}>{subcategory.option}</option>
    })
  };

  let listItemsToOptions = (listItems) => {
    return listItems.map(el => <option key={el.id} value={el.option}>{el.option}</option>);
  };

  useEffect(() => {
    if (props.subcategoryList.length === 0) {
      if (props.currentCategory.name) {
        props.getSubCategories();
        props.getCategories();
      }

      if (props.currentCategory.categoryName) {
        handleSetCategoryId(props.currentCategory.categoryId);
        props.getSubCategories();
      }

      if (props.currentCategory.subcategories) {
        handleSetSubcategoryId(props.currentCategory.subId);
      }
    }
  }, [props.subcategoryList]);

  const getCurrentHeight = () => {
    switch (subcategoryId) {
      case 1: case 2: return '900px';
      case 3: case 4: return '900px';
      case 5: case 6: return '700px';

      default: return '200px';
    }
  }

  useEffect(() => {
    if (subcategoryId > 0)
      props.getTemplate(subcategoryId);
  }, [subcategoryId]);

  const handleSubmit = () => {
    props.getAdsByFilter({subcategoryId, template});
  }

  return (
      <div style={{height: getCurrentHeight()}} className={s.filter__container}>
        <div>
          {props.currentCategory.name &&
            <div>
              <Select label={'Категория'} handle={getCategoryOptions()} value={chosedCategory} onChange={handleSetChosedCategory}/>
              <Select label={'Подкатегория'} handle={getSubcategoryOptions()} value={chosedSubcategory} onChange={handleSetChosedSubcategory}/>
              <SpaceLine margin={'0 auto'} width={200} marginTop={10} marginBottom={10}/>
            </div>
          }

          {props.currentCategory.categoryName &&
            <div>
              <Select label={'Подкатегория'} handle={getSubcategoryOptions()} value={chosedSubcategory} onChange={handleSetChosedSubcategory}/>
              <SpaceLine margin={'0 auto'} width={200} marginTop={10} marginBottom={10}/>
            </div>
          }

          {(props.currentCategory.subcategories || subcategoryId > 0) && template &&
            <div>
              <PriceSelect value={price} onChange={handleSetPrice}/>

              <SpaceLine margin={'0 auto'} width={200} marginTop={10} marginBottom={10}/>

              {subcategoryId === 1 && template &&
                <div>
                  <Select label={'Аренда'} handle={listItemsToOptions(props.boolOption)} value={rent} onChange={onChangeRent}/>
                  {template.rent &&
                    <Select label={'Срок аренды'} handle={listItemsToOptions(props.rentOption)} value={rentPeriod} onChange={onChangeRentPeriod}/>
                  }
                  <Input label={'Месячная стоимость'} placeholder={'Цена в руб.'} value={monthlyCost} onChange={onChangeMonthlyCost}/>
                  <Input label={'Количество комнат'} placeholder={'Например: 4'} value={roomNumber} onChange={onChangeRoomNumber}/>
                  <Input label={'Количество этажей'} placeholder={'Например: 2'} value={stage} onChange={onChangeStage}/>
                </div>
              }
              {subcategoryId === 2 && template &&
                <div>
                  <Select label={'Аренда'} handle={listItemsToOptions(props.boolOption)} value={rent} onChange={onChangeRent}/>
                  {template.rent &&
                      <Select label={'Срок аренды'} handle={listItemsToOptions(props.rentOption)} value={rentPeriod} onChange={onChangeRentPeriod}/>
                  }
                  <Input label={'Месячная стоимость'} placeholder={'Цена в руб.'} value={monthlyCost} onChange={onChangeMonthlyCost}/>
                  <Input label={'Количество комнат'} placeholder={'Например: 4'} value={roomNumber} onChange={onChangeRoomNumber}/>
                  <Input label={'Этаж'} placeholder={'Например: 11'} value={stage} onChange={onChangeStage}/>
                </div>
              }
              {subcategoryId === 3 && template &&
                <div>
                  <Input label={'Марка'} placeholder={'Nissan'} value={brand} onChange={onChangeBrand}/>
                  <Input label={'Год выпуска'} placeholder={'2010'} value={relaseYear} onChange={onChangeRelaseYear}/>
                  <Input label={'Пробег (км.)'} placeholder={'300000'} value={milage} onChange={onChangeMilage}/>
                  <Input label={'Объем двигателя'} placeholder={'4.5'} value={capacity} onChange={onChangeCapacity}/>
                  <Select label={'Привод'} handle={listItemsToOptions(props.wheelDriveOption)} value={wheelDrive} onChange={onChangeWheelDrive}/>
                </div>
              }
              {subcategoryId === 4 && template &&
                <div>
                  <Input label={'Марка'} placeholder={'Nissan'} value={brand} onChange={onChangeBrand}/>
                  <Input label={'Год выпуска'} placeholder={'2010'} value={relaseYear} onChange={onChangeRelaseYear}/>
                  <Input label={'Пробег (км.)'} placeholder={'300000'} value={milage} onChange={onChangeMilage}/>
                  <Input label={'Объем двигателя'} placeholder={'4.5'} value={capacity} onChange={onChangeCapacity}/>
                  <Select label={'Количество передач'} handle={listItemsToOptions(props.gearsOption)} value={gears} onChange={onChangeGears}/>
                </div>
              }
              {(subcategoryId === 5 || subcategoryId === 6) && template &&
                <div>
                  <Select label={'Б/у?'} handle={listItemsToOptions(props.boolOption)} value={wasInUse} onChange={onChangeWasInUse}/>
                  <Input label={'Марка'} placeholder={'LG'} value={brand} onChange={onChangeBrand}/>
                  <Input label={'Год выпуска'} placeholder={'2002'} value={relaseYear} onChange={onChangeRelaseYear}/>
                </div>
              }

              <button className={s.filter__btn} onClick={handleSubmit}>Применить</button>
            </div>
          }
        </div>
      </div>
  );
};

export default SearchFilter;