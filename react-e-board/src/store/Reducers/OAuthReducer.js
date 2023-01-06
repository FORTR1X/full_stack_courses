import axios from "axios";

const SET_OAUTH_USER = 'SET_OAUTH_USER';
const SET_OAUTH_DATA = 'SET_OAUTH_DATA';

let initalState = {
  user: null,

  accessToken: null,
  expiresIn: null,
  userId: null,
}

const OAuthReducer = (state = initalState, action) => {
  switch (action.type) {

    case SET_OAUTH_USER:
      return {
        ...state,
        user: action.user
      }

    case SET_OAUTH_DATA:
      const dataToken = action.location.match(/\w+=\w+/mg);
      if (dataToken) {
        const accessToken = dataToken[0].match(/=\w+/)[0].slice(1);
        const expiresIn = dataToken[1].match(/=\w+/)[0].slice(1);
        const userId = dataToken[2].match(/=\w+/)[0].slice(1);
        if (accessToken)
          return {
            ...state,
            accessToken: accessToken,
            expiresIn: expiresIn,
            userId: userId,
          }
      }
      break;

    default: return state;
  }
}

export const setOAuthUser = (user) => ({ type: SET_OAUTH_USER, user })
export const getOAuthData = (location) => ({ type: SET_OAUTH_DATA, location })

export default OAuthReducer;