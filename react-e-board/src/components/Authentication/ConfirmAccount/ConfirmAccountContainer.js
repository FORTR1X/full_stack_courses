import {connect} from "react-redux";
import ConfirmAccount from "./ConfirmAccount";
import {getActivationCode} from "../../../store/Actions/ConfirmAccountReducer";

const mapStateToProps = (state) => {
  return {
    user: state.activation.user,
    error: state.activation.error
  }
}

const ConfirmAccountContainer = connect(mapStateToProps, {
  getActivationCode
})(ConfirmAccount);

export default ConfirmAccountContainer;