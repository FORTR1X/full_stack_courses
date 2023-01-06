import axios from "axios";
import {setAdverts, setUserProfile} from "../Reducers/MyAdvertsReducer";

export const getUserProfile = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/user/${props.user}`, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => {
          dispatch(setUserProfile(response.data));
        }
    )
  }
}

export const getAdverts = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/user/${props.user}`, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => {
          dispatch(setAdverts(response.data));
        }
    )
  }
}