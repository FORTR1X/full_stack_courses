import {connect} from "react-redux";
import ForgotPassword from "./ForgotPassword";
import {setToggleForgotPassword} from "../../../store/Reducers/NavBarReducer";
import {changeEmail} from "../../../store/Reducers/ForgotPasswordReducer";
import {sendEmailCode} from "../../../store/Actions/ForgotPasswordActions";

let mapStateToProps = (state) => {
  return {
    email: state.forgotPass.email,

    toggleForgorPassword: state.navbar.toggleForgorPassword
  }
}

const ForgotPasswordContainer = connect(mapStateToProps, {
  setToggleForgotPassword, sendEmailCode, changeEmail
})(ForgotPassword);

export default ForgotPasswordContainer;