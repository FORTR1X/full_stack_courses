const SET_CURRENT_SUB_ID = 'SET_CURRENT_SUB_ID';
const SET_TOKEN_DATA = 'SET_TOKEN_DATA';
const SET_CURRENT_CHARACT = 'SET_CURRENT_CHARACT';
const DELETE_ADVERT = 'DELETE_ADVERT';

let initialState = {
  currentAdvert: null,
  currentCharact: null,
  tokenData: null,
  deleted: false
}

const editAdvertReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_SUB_ID:
      return {
        ...state,
        currentAdvert: action.advert
      }

    case SET_TOKEN_DATA:
      return {
        ...state,
        tokenData: action.tokenData
      }

    case SET_CURRENT_CHARACT:
      return {
        ...state,
        currentCharact: action.charact
      }

    case DELETE_ADVERT:
      debugger;
      return {
        ...state,
        deleted: true
      }

    default: return state;
  }
}

export const setCurrentAdvert = (advert) => ({ type: SET_CURRENT_SUB_ID, advert });
export const setCurrentCharact = (charact) => ({ type: SET_CURRENT_CHARACT, charact });
export const setTokenData = (tokenData) => ({ type: SET_TOKEN_DATA, tokenData });
export const delAdvert = () => ({ type: DELETE_ADVERT });

export default editAdvertReducer;