const CHANGE_LOGIN = 'CHANGE_LOGIN';
const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_NUMBER = 'CHANGE_NUMBER';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_REPEAT_PASSWORD = 'CHANGE_REPEAT_PASSWORD';

let initialState = {
  login: '',
  email: '',
  number: '',
  password: '',
  repeatPassword: ''
}

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.login
      }

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      }

    case CHANGE_NUMBER:
      return {
        ...state,
        number: action.number
      }

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      }

    case CHANGE_REPEAT_PASSWORD:
      return {
        ...state,
        repeatPassword: action.repeatPassword
      }

    default:
      return state;
  }
}

export const changeLogin = (login) => ({ type: CHANGE_LOGIN, login });
export const changeEmail = (email) => ({ type: CHANGE_EMAIL, email });
export const changeNumber = (number) => ({ type: CHANGE_NUMBER, number });
export const changePassword = (password) => ({ type: CHANGE_PASSWORD, password });
export const changeRepeatPassword = (repeatPassword) => ({ type: CHANGE_REPEAT_PASSWORD, repeatPassword });

export default registrationReducer;