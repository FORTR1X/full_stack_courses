import axios from "axios";
import {setTemplate} from "../Reducers/SearchFilterReducer";

export const getTemplate = (subId) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/characteristic/${subId}`).then(
      response => dispatch(setTemplate(response.data))
    )
  }
}

export const getAdsByFilter = (props) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/ad/filter/${props.subcategoryId}`, props.template).then(
        response => console.log(response)
    )
  }
}