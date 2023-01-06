import axios from "axios";

const CHANGE_RESET_PASSWORD = 'CHANGE_RESET_PASSWORD';
const CHANGE_RESET_CONFIRM_PASSWORD = 'CHANGE_RESET_CONFIRM_PASSWORD';
const SET_RESET_STATUS = 'SET_RESET_STATUS';
const SET_RESET_ERROR = 'SET_RESET_ERROR';

let initialState = {
  password: '',
  confirmPassword: '',
  status: null,
  error: null
}

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_RESET_PASSWORD:
      return {
        ...state,
        password: action.password
      }

    case CHANGE_RESET_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.confirmPassword
      }

    case SET_RESET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case SET_RESET_ERROR:
      return {
        ...state,
        error: action.error.response.data
      }

    default:
      return state;
  }
}

export const changePasswordField = (password) => ({ type: CHANGE_RESET_PASSWORD, password });
export const changeConfirmPasswordField = (confirmPassword) => ({ type: CHANGE_RESET_CONFIRM_PASSWORD, confirmPassword });

export const setResetStatus = (status) => ({ type: SET_RESET_STATUS, status });
export const setResetError = (error) => ({ type: SET_RESET_ERROR, error });

export default resetPasswordReducer;