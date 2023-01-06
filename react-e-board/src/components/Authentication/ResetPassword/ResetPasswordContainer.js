import {connect} from "react-redux";
import ResetPassword from "./ResetPassword";
import {changeConfirmPasswordField, changePasswordField} from "../../../store/Reducers/ResetPasswordReducer";
import {changeUserPassword} from "../../../store/Actions/ResetPasswordActions";

const mapStateToProps = (state) => {
  return {
    password: state.resetPassword.password,
    confirmPassword: state.resetPassword.confirmPassword,
    status: state.resetPassword.status,
    error: state.resetPassword.error
  }
}

const ResetPasswordContainer = connect(mapStateToProps, {
  changeUserPassword, changePasswordField, changeConfirmPasswordField
})(ResetPassword);

export default ResetPasswordContainer;