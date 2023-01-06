import axios from "axios";
import {changeEmail} from "../Reducers/ForgotPasswordReducer";

export const sendEmailCode = (email) => {
  return (dispatch) => {
    axios.put('http://localhost:8080/forgotPassword', {email}).then(
        response => dispatch(changeEmail(response.data))
    );
  }
}