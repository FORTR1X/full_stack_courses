import axios from "axios";
import {setAdverts, setUser} from "../Reducers/ViewUserReducer";

export const getUser = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/user/id${props}`).then(
        response => dispatch(setUser(response.data))
    )
  }
}

export const getAdverts = (username) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/user/${username}`).then(
        response => dispatch(setAdverts(response.data))
    )
  }
}