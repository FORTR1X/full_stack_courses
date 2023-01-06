import {connect} from "react-redux";
import {
  changeRequest,
  setToggleForgotPassword,
  setToggleLogin,
  setToggleRegistration, setToggleSupport,
  setToggleUserMenu, setToggleHint
} from "../../store/Reducers/NavBarReducer";
import Navbar from "./Navbar";
import {setIsAuth, setLogout} from "../../store/Reducers/LoginReducer";

let mapStateToProps = (state) => {
  return {
    request: state.navbar.request,
    toggleLogin: state.navbar.toggleLogin,
    toggleRegistration: state.navbar.toggleRegistration,
    toggleForgorPassword: state.navbar.toggleForgorPassword,
    toggleUserMenu: state.navbar.toggleUserMenu,
    toggleSupport: state.navbar.toggleSupport,
    toggleHint: state.navbar.toggleHint,

    isAuth: state.auth.isAuth,
    user: state.auth.user,

    adSearch: state.urls.adSearch,
    mainPage: state.urls.mainPage,
  }
}

const NavBarContainer = connect(mapStateToProps, {
  changeRequest, setToggleLogin, setToggleRegistration, setToggleForgotPassword,
  setIsAuth, setToggleUserMenu, setToggleSupport, setToggleHint, setLogout
})(Navbar);

export default NavBarContainer;
