const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD';
const SET_AVATAR = 'SET_AVATAR';
const DELETE_USER = 'DELETE_USER';

let initialState = {
  password: '',
  confirmPassword: '',
  avatar: {},

  deleted: false,
}

const profileSettingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password
      }

    case CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.confirmPassword
      }

    case SET_AVATAR:
      return {
        ...state,
        avatar: action.avatar
      }

    case DELETE_USER:
      return {
        ...state,
        deleted: true
      }

    default:
      return state;
  }
}

export const changePassword = (password) => ({ type: CHANGE_PASSWORD, password });
export const changeConfirmPassword = (confirmPassword) => ({ type: CHANGE_CONFIRM_PASSWORD, confirmPassword });
export const setAvatar = (avatar) => ({ type: SET_AVATAR, avatar });
export const deleteUser = () => ({ type: DELETE_USER });

export default profileSettingsReducer;