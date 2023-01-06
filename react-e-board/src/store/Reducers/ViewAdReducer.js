import axios from "axios";
import {getCategory, getCharacteristic, getOwner} from "../Actions/ViewAdActions";

const SET_ADVERT = 'SET_ADVERT';
const SET_CHARACTERISTIC = 'SET_CHARACTERISTIC';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_OWNER = 'SET_OWNER';
const SET_SUBCATEGORY = 'SET_SUBCATEGORY';

let initialState = {
  advert: {photos: null},
  characteristic: {id: -1, name: 'неизвестно'},
  category: {id: -1, categoryName: 'неизвестно'},
  subcategory: {id: -1, subcategories: 'неизвестно'},
  owner: {id: -1, name: 'неизвестно', avatar: null},
}

const viewAdReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_ADVERT:
      getCharacteristic(action.advert.adId);
      getCategory(action.advert.subId);
      getOwner(action.advert.owner);
      return {
        ...state,
        advert: action.advert
      }

    case SET_CHARACTERISTIC:
      return {
        ...state,
        characteristic: action.characteristics.characteristic
      }

    case SET_CATEGORY:
      return {
        ...state,
        category: action.category
      }

    case SET_OWNER:
      return {
        ...state,
        owner: action.owner
      }

    case SET_SUBCATEGORY:
      return {
        ...state,
        subcategory: action.subId
      }

    default:
      return state;
  }
}

export const setAdvert = (advert) => ({ type: SET_ADVERT, advert });
export const setCharacteristic = (characteristics) => ({ type: SET_CHARACTERISTIC, characteristics });
export const setCategory = (category) => ({ type: SET_CATEGORY, category });
export const setOwner = (owner) => ({ type: SET_OWNER, owner });
export const setSubcategory = (subId) => ({ type: SET_SUBCATEGORY, subId });

export default viewAdReducer;