import axios from "axios";
import {setAdvert, setCategory, setCharacteristic, setOwner, setSubcategory} from "../Reducers/ViewAdReducer";

export const getAdvert = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/view/id${props}`).then(
        response => {
          dispatch(setAdvert(response.data));
        }
    ).catch(
        reason => {
          dispatch(setAdvert(reason));
        }
    )
  }
}

export const getCharacteristic = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/characteristic/advert/id${props}`).then(
        response => {
          dispatch(setCharacteristic(response.data));
        }
    ).catch(
        reason => {
          dispatch(setCharacteristic(reason));
        }
    )
  }
}

export const getCategory = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/category/subcategory/id${props}`).then(
        response => {
          dispatch(setCategory(response.data));
        }
    ).catch(
        reason => {
          dispatch(setCategory(reason));
        }
    )
  }
}

export const getSubcategory = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/subcategory/id${props}`).then(
        response => {
          dispatch(setSubcategory(response.data));
        }
    ).catch(
        reason => {
          dispatch(setSubcategory(reason));
        }
    )
  }
}

export const getOwner = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/user/${props}`).then(
        response => {
          dispatch(setOwner(response.data));
        }
    ).catch(
        reason => {
          dispatch(setOwner(reason));
        }
    )
  }
}