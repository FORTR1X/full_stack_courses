const CHANGE_LOGIN = 'CHANGE_LOGIN';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const SET_AUTH = 'SET_AUTH';
const IS_AUTH = 'IS_AUTH';
const SET_USER = 'SET_USER';
const SET_LOGOUT = 'SET_LOGOUT';

let initialState = {
  login: '',
  password: '',
  token: '',
  refreshToken: '',
  isAuth: false,
  user: null
}

const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.login,
      }

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      }

    case SET_AUTH:
      return {
        ...state,
        token: action.data.access_token,
        refreshToken: action.data.refresh_token,
      }

    case IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }

    case SET_USER:
      return {
        ...state,
        user: action.data,
        isAuth: true
      }

    case SET_LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export const changeLogin = (login) => ({ type: CHANGE_LOGIN, login });
export const changePassword = (password) => ({ type: CHANGE_PASSWORD, password });
export const setAuth = (data) => ({type: SET_AUTH, data});
export const setIsAuth = (isAuth) => ({ type: IS_AUTH, isAuth })
export const setUser = (data) => ({ type: SET_USER, data })
export const setLogout = () => ({ type: SET_LOGOUT });

export default loginReducer;