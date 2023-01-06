import {connect} from "react-redux";

import {changeLogin, changePassword} from "../../../store/Reducers/LoginReducer";
import {setToggleForgotPassword, setToggleLogin, setToggleRegistration} from "../../../store/Reducers/NavBarReducer";
import Login from "./Login";
import {getAuth, getUser} from "../../../store/Actions/LoginActions";

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    password: state.auth.password,

    toggleLogin: state.navbar.toggleLogin,
    toggleRegistration: state.navbar.toggleRegistration,
    toggleForgorPassword: state.navbar.toggleForgorPassword,

    token: state.auth.token,
    refreshToken: state.auth.refreshToken,
    user: state.auth.user,
    isAuth: state.auth.isAuth
  }
}

const LoginContainer = connect(mapStateToProps, {changeLogin, changePassword, setToggleLogin, setToggleRegistration, setToggleForgotPassword, getAuth, getUser})(Login);

export default LoginContainer;