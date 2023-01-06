import axios from "axios";
import {setErrorActivation, setUserActivation} from "../Reducers/ConfirmAccountReducer";

export const getActivationCode = (code) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/activation/${code}`).then(
        response => {
          dispatch(setUserActivation(response.data));
        }
    ).catch(
        error => dispatch(setErrorActivation(error))
    )
  }
}