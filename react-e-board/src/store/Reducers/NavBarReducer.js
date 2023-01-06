const CHANGE_REQUEST = 'CHANGE_REQUEST';
const SET_TOGGLE_LOGIN = 'SET_TOGGLE_LOGIN';
const SET_TOGGLE_REGISTRATION = 'SET_TOGGLE_REGISTRATION';
const SET_TOGGLE_FORGOT_PASSWORD = 'SET_TOGGLE_FORGOT_PASSWORD';
const SET_TOGGLE_USER_MENU = 'SET_TOGGLE_USER_MENU';
const SET_TOGGLE_SUPPORT = 'SET_TOGGLE_SUPPORT';
const SET_TOGGLE_HINT = 'SET_TOGGLE_HINT';

let initialState = {
  request: '',
  toggleLogin: false,
  toggleRegistration: false,
  toggleForgorPassword: false,
  toggleUserMenu: false,
  toggleSupport: false,
  toggleHint: false
}

const navBarReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_REQUEST:
      return {
        ...state,
        request: action.request
      }

    case SET_TOGGLE_LOGIN:
      return {
        ...state,
        toggleLogin: action.bool
      }

    case SET_TOGGLE_REGISTRATION:
      return {
        ...state,
        toggleLogin: false,
        toggleRegistration: action.bool
      }

    case SET_TOGGLE_FORGOT_PASSWORD:
      return {
        ...state,
        toggleLogin: false,
        toggleForgorPassword: action.bool
      }

    case SET_TOGGLE_USER_MENU:
      return {
        ...state,
        toggleUserMenu: action.bool
      }

    case SET_TOGGLE_SUPPORT:
      return {
        ...state,
        toggleSupport: action.bool
      }

    case SET_TOGGLE_HINT:
      return {
        ...state,
        toggleHint: action.bool
      }

    default:
      return state;
  }
}

export const changeRequest = (request) => ({ type:CHANGE_REQUEST, request });
export const setToggleLogin = (bool) => ({ type: SET_TOGGLE_LOGIN, bool });
export const setToggleRegistration = (bool) => ({ type: SET_TOGGLE_REGISTRATION, bool });
export const setToggleForgotPassword = (bool) => ({ type: SET_TOGGLE_FORGOT_PASSWORD, bool });
export const setToggleUserMenu = (bool) => ({ type: SET_TOGGLE_USER_MENU, bool });
export const setToggleSupport = (bool) => ({ type: SET_TOGGLE_SUPPORT, bool });
export const setToggleHint = (bool) => ({ type: SET_TOGGLE_HINT, bool });

export default navBarReducer;