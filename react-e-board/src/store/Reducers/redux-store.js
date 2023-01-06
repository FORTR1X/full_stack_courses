import { createStore, applyMiddleware, combineReducers } from 'redux';
import createAdReducer from "./Reducers/CreateAdReducer";
import thunk from "redux-thunk";
import loginReducer from "./Reducers/LoginReducer";
import navBarReducer from "./Reducers/NavBarReducer";
import RegistrationReducer from "./Reducers/RegistrationReducer";
import forgotPasswordReducer from "./Reducers/ForgotPasswordReducer";
import viewAdReducer from "./Reducers/ViewAdReducer";
import myAdvertsReducer from "./Reducers/MyAdvertsReducer";
import profileSettingsReducer from "./Reducers/ProfileSettingsReducer";
import advertsReducer from "./Reducers/AdvertsReducer";
import viewUserReducer from "./Reducers/ViewUserReducer";
import urlReducer from "./Reducers/UrlReducer";
import ConfirmAccountReducer from "./Reducers/ConfirmAccountReducer";
import resetPasswordReducer from "./Reducers/ResetPasswordReducer";
import OAuthReducer from "./Reducers/OAuthReducer";
import searchFilterReducer from "./Reducers/SearchFilterReducer";
import editAdvertReducer from "./Reducers/EditAdvertReducer";

let reducers = combineReducers({

  create: createAdReducer,
  auth: loginReducer,
  registration: RegistrationReducer,
  navbar: navBarReducer,
  forgotPass: forgotPasswordReducer,
  viewAd: viewAdReducer,
  profile: myAdvertsReducer,
  settings: profileSettingsReducer,
  viewAds: advertsReducer,
  viewUser: viewUserReducer,
  urls: urlReducer,
  activation: ConfirmAccountReducer,
  resetPassword: resetPasswordReducer,
  OAuth: OAuthReducer,
  searchFilter: searchFilterReducer,
  editAdvert: editAdvertReducer

});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;