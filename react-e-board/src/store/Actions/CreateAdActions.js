import axios from "axios";
import {setCategories, setNewAdvert, setNewCharact, setSubCategories} from "../Reducers/CreateAdReducer";

export const getCategories = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/category/').then(
        categories => dispatch(setCategories(categories.data))
    );
  }
};

export const getSubCategories = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/subcategory/').then(
        subcategories => dispatch(setSubCategories(subcategories.data))
    );
  }
};

export const createAdvert = (props) => {
  return (dispatch) => {
    axios.post('http://localhost:8080/ad/create', props.advert, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => dispatch(setNewAdvert(response.data))
    )
  }
}

export const createCharacteristic = (props) => {
  return (dispatch) => {
    axios.post('http://localhost:8080/characteristic/create/', props.characteristic, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => dispatch(setNewCharact(response.data))
    )
  }
}