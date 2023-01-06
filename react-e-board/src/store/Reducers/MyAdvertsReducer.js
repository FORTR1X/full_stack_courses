const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_ADVERTS_PROFILE = 'SET_ADVERTS_PROFILE';

let initialState = {
  user: {},
  adverts: []
}

const myAdvertsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_PROFILE:
      return {
        ...state,
        user: action.user
      }

    case SET_ADVERTS_PROFILE:
      return {
        ...state,
        adverts: action.adverts
      }
    default:
      return state;
  }
}

export const setUserProfile = (user) => ({ type: SET_USER_PROFILE, user });
export const setAdverts = (adverts) => ({ type: SET_ADVERTS_PROFILE, adverts });

export default myAdvertsReducer;