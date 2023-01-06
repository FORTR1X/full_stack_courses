import axios from "axios";
import {setAdverts} from "../Reducers/AdvertsReducer";

export const getCategoryAdverts = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/category/id${props.currentCategory.categoryId}/?limit=8&page=${props.page}`).then(
        response => {
          dispatch(setAdverts(response.data))
        }
    )
  }
}

export const getSubcategoryAdverts = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/subcategory/id${props.currentCategory.subId}/?limit=8&page=${props.page}`).then(
        response => dispatch(setAdverts(response.data))
    )
  }
}

export const getNewAds = (page) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/view?limit=8&page=${page}`).then(
        response => dispatch(setAdverts(response.data))
    )
  }
}

export const getSearchedAds = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/search?q=${props.search}&limit=10&page=${props.page}`).then(
        response => dispatch(setAdverts(response.data))
    ).catch()
  }
}