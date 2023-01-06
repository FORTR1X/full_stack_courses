import {connect} from "react-redux";
import {
  changeEmail,
  changeLogin,
  changeNumber,
  changePassword,
  changeRepeatPassword
} from "../../../store/Reducers/RegistrationReducer";
import Registration from "./Registration";
import {setToggleForgotPassword, setToggleLogin, setToggleRegistration} from "../../../store/Reducers/NavBarReducer";
import {registration} from "../../../store/Actions/RegistrationActions";

let mapStateToProps = (state) => {
  return {
    login: state.registration.login,
    email: state.registration.email,
    number: state.registration.number,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword,

    toggleRegistration: state.navbar.toggleRegistration,
    user: state
  }
}

const RegistrationContainer = connect(mapStateToProps, {
  changeLogin, changeEmail, changeNumber, changePassword, changeRepeatPassword,
  setToggleLogin, setToggleRegistration, setToggleForgotPassword, registration

})(Registration);

export default RegistrationContainer;