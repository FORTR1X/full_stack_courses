import axios from "axios";

const SET_VIEW_USER = 'SET_VIEW_USER';
const SET_VIEW_ADVERTS = 'SET_VIEW_ADVERTS';

let initialState = {
  user: {id: -1, username: 'Нет информации', createdAt: null, avatar: null},
  adverts: []
}

const viewUserReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_VIEW_USER:
      return {
        ...state,
        user: action.user
      }

    case SET_VIEW_ADVERTS:
      return {
        ...state,
        adverts: action.ads
      }

    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_VIEW_USER, user });
export const setAdverts = (ads) => ({ type: SET_VIEW_ADVERTS, ads });

export default viewUserReducer;