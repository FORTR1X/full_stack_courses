import {connect} from "react-redux";
import OAuth from "./OAuth";
import {getOAuthData} from "../../../store/Reducers/OAuthReducer";
import {checkIsAuth} from "../../../store/Actions/LoginActions";
import {getOAuthUser} from "../../../store/Actions/OAuthActions";

const mapStateToProps = (state) => {
  return {
    user: state.OAuth.user,

    accessToken: state.OAuth.accessToken,
    expiresIn: state.OAuth.expiresIn,
    userId: state.OAuth.userId,

    isAuth: state.auth.isAuth,
  }
}

const OAuthContainer = connect(mapStateToProps, {
  getOAuthData, getOAuthUser, checkIsAuth
})(OAuth);

export default OAuthContainer;