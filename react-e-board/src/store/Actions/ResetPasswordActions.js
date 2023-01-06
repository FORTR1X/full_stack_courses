import axios from "axios";
import {setResetError, setResetStatus} from "../Reducers/ResetPasswordReducer";

export const changeUserPassword = (props) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/forgotPassword/${props.code}`, `${props.password}`, {
      headers: {"Content-Type": "text/plain"}
    }).then(
        response => dispatch(setResetStatus(response))
    ).catch(
        error => dispatch(setResetError(error))
    )
  }
}