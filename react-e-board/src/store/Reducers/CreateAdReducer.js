import axios from "axios";

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_SUB_CATEGORIES = 'SET_SUB_CATEGORIES';

const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SELECT_SUB_CATEGORY = 'SELECT_SUB_CATEGORY';

const CHANGE_HEADER_TEXT = 'CHANGE_HEADER_TEXT';
const CHANGE_PRICE_TEXT = 'CHANGE_PRICE_TEXT';
const CHANGE_DESCRIPTION_TEXT = 'CHANGE_DESCRIPTION_TEXT';

const CHANGE_RENT = 'CHANGE_RENT';
const CHANGE_RENT_PERIOD = 'CHANGE_RENT_PERIOD';
const CHANGE_ROOM_NUMBER = 'CHANGE_ROOM_NUMBER';
const CHANGE_STAGE = 'CHANGE_STAGE';
const CHANGE_STAGES = 'CHANGE_STAGES';
const CHANGE_BRAND = 'CHANGE_BRAND';
const CHANGE_RELASE_YEAR = 'CHANGE_RELASE_YEAR';
const CHANGE_MILAGE = 'CHANGE_MILAGE';
const CHANGE_CAPACITY = 'CHANGE_CAPACITY';
const CHANGE_WHEEL_DRIVE = 'CHANGE_WHEEL_DRIVE';
const CHANGE_GEARS = 'CHANGE_GEARS';
const CHANGE_WAS_IN_USE = 'CHANGE_WAS_IN_USE';
const CHANGE_MONTHLY_COST = 'CHANGE_MONTHLY_COST';

const SET_NEW_ADVERT = 'SET_NEW_ADVERT';
const SET_NEW_CHARACT = 'SET_NEW_CHARACT';

let initialState = {
  header: '',
  price: '',
  description: '',

  category: 'Не выбрано',
  subcategory: 'Не выбрано',

  rent: 'Не выбрано',
  rentPeriod: 'Не выбрано',
  monthlyCost: '',
  roomNumber: '',
  stage: '',
  stages: '',

  brand: '',
  relaseYear: '',
  milage: '',
  capacity: '',
  wheelDrive: 'Не выбрано',
  gears: 'Не выбрано',

  wasInUse: 'Не выбрано',

  categoriesOption: [],
  subcategoriesOption: [],
  boolOption: [{id: 0, option: 'Да'}, {id: 1, option: 'Нет'}],
  rentOption: [{id: 0, option: 'Длительный'}, {id: 1, option: 'Посуточный'}],
  wheelDriveOption: [{id: 0, option: 'Полный'}, {id: 1, option: 'Передний'}, {id: 2, option: 'Задний'}],
  gearsOption: [{id: 0, option: 1}, {id: 1, option: 2}, {id: 2, option: 3}, {id: 3, option: 4}, {id: 4, option: 5}, {id: 5, option: 6}],

  newAdvert: null,
  newCharact: null
};

const createAdReducer = (state = initialState, action) => {

    switch (action.type) {
      case SELECT_CATEGORY:
        return {
          ...state,
          category: action.select,
          subcategory: 'Не выбрано'
        }
      case SELECT_SUB_CATEGORY:
        return {
          ...state,
          subcategory: action.select,

          rent: 'Не выбрано',
          rentPeriod: 'Не выбрано',
          wheelDrive: 'Не выбрано',
          gears: 'Не выбрано',
          wasInUse: 'Не выбрано'
        }

      case CHANGE_HEADER_TEXT:
        return {
          ...state,
          header: action.text
        }
      case CHANGE_PRICE_TEXT:
        return {
          ...state,
          price: action.text
        }
      case CHANGE_DESCRIPTION_TEXT:
        return {
          ...state,
          description: action.text
        }

      case CHANGE_RENT:
        return {
          ...state,
          rent: action.select
        }
      case CHANGE_RENT_PERIOD:
        return {
          ...state,
          rentPeriod: action.select
        }
      case CHANGE_ROOM_NUMBER:
        return {
          ...state,
          roomNumber: action.text
        }
      case CHANGE_STAGE:
        return {
          ...state,
          stage: action.text
        }
      case CHANGE_STAGES:
        return {
          ...state,
          stages: action.text
        }

      case CHANGE_BRAND:
        return {
          ...state,
          brand: action.text
        }
      case CHANGE_RELASE_YEAR:
        return {
          ...state,
          relaseYear: action.text
        }
      case CHANGE_MILAGE:
        return {
          ...state,
          milage: action.text
        }

      case CHANGE_CAPACITY:
        return {
          ...state,
          capacity: action.text
        }

      case CHANGE_WHEEL_DRIVE:
        return {
          ...state,
          wheelDrive: action.select
        }

      case CHANGE_GEARS:
        return {
          ...state,
          gears: action.select
        }

      case SET_CATEGORIES:
        const listCategory = action.option.map(category => {
          return {id: category.categoryId, option: category.categoryName}
        });

        return {
          ...state,
          categoriesOption: listCategory
        }

      case SET_SUB_CATEGORIES:
        const listSubcategory = action.option.map(subcat => {
          return {id: subcat.subId, option: subcat.subcategories, categoryId: subcat.categoryId}
        })

        return {
          ...state,
          subcategoriesOption: listSubcategory
        }

      case CHANGE_WAS_IN_USE:
        return {
          ...state,
          wasInUse: action.select
        }

      case CHANGE_MONTHLY_COST:
        return {
          ...state,
          monthlyCost: action.text
        }

      case SET_NEW_ADVERT:
        return {
          ...state,
          newAdvert: action.ad
        }

      case SET_NEW_CHARACT:
        return {
          ...state,
          newCharact: action.charact
        }

      default:
        return state;
    }
  }

export const changeCategory = (select) => ({ type: SELECT_CATEGORY, select })
export const changeSubCategory = (select) => ({ type: SELECT_SUB_CATEGORY, select })

export const changeHeader = (text) => ({ type: CHANGE_HEADER_TEXT, text })
export const changePrice = (text) => ({ type: CHANGE_PRICE_TEXT, text })
export const changeDescription = (text) => ({ type: CHANGE_DESCRIPTION_TEXT, text })

export const changeRent = (select) => ({ type: CHANGE_RENT, select});
export const changeRentPeriod = (select) => ({ type: CHANGE_RENT_PERIOD, select});
export const changeRoomNumber = (text) => ({ type: CHANGE_ROOM_NUMBER, text });
export const changeStage = (text) => ({ type: CHANGE_STAGE, text });
export const changeStages = (text) => ({ type: CHANGE_STAGES, text });
export const changeBrand = (text) => ({ type: CHANGE_BRAND, text });
export const changeRelaseYear = (text) => ({ type: CHANGE_RELASE_YEAR, text });
export const changeMilage = (text) => ({ type: CHANGE_MILAGE, text });
export const changeCapacity = (text) => ({ type: CHANGE_CAPACITY, text });
export const changeWheelDrive = (select) => ({ type: CHANGE_WHEEL_DRIVE, select});
export const changeGears = (select) => ({ type: CHANGE_GEARS, select});
export const changeWasInUse = (select) => ({ type: CHANGE_WAS_IN_USE, select});
export const changeMonthlyCost = (text) => ({ type: CHANGE_MONTHLY_COST, text });

export const setCategories = (option) => ({ type: SET_CATEGORIES, option });
export const setSubCategories = (option) => ({ type: SET_SUB_CATEGORIES, option });

export const setNewAdvert = (ad) => ({ type: SET_NEW_ADVERT, ad });
export const setNewCharact = (charact) => ({ type: SET_NEW_CHARACT, charact });

export default createAdReducer;