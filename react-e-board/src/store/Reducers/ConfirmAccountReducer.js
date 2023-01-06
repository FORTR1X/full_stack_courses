import axios from "axios";

const SET_ERROR_ACTIVATION = 'SET_ERROR_ACTIVATION';
const SET_USER_ACTIVATION = 'SET_USER_ACTIVATION';

let initialState = {
  user: null,
  error: null
}

const confirmAccountReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_ACTIVATION:
      return {
        ...state,
        user: action.data
      }

    case SET_ERROR_ACTIVATION:
      return {
        ...state,
        error: action.error
      }

    default: return state;
  }
}

export const setErrorActivation = (error) => ({ type: SET_ERROR_ACTIVATION, error });
export const setUserActivation = (data) => ({ type: SET_USER_ACTIVATION, data });

export default confirmAccountReducer;