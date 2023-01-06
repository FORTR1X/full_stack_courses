import axios from "axios";

const CHANGE_EMAIL = 'CHANGE_EMAIL';

let initialState = {
  email: ''
}

const forgotPasswordReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email
      }

    default:
      return state;
  }

}

export const changeEmail = (email) => ({ type: CHANGE_EMAIL, email });

export default forgotPasswordReducer;
