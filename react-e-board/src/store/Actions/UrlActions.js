import axios from "axios";
import {
  isContentLoaded,
  setAppartaments,
  setAppliance,
  setCars,
  setFurniture, setHousehold,
  setHouses, setImmovables,
  setMoto, setTransport
} from "../Reducers/UrlReducer";

export const getSubcategories = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/subcategory/').then(
        response => {
          dispatch(setHouses(response.data[0]));
          dispatch(setAppartaments(response.data[1]));

          dispatch(setCars(response.data[2]));
          dispatch(setMoto(response.data[3]));

          dispatch(setAppliance(response.data[4]));
          dispatch(setFurniture(response.data[5]));
          dispatch(isContentLoaded());
        }
    )
  }
}

export const getCategories = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/category/').then(
        response => {
          dispatch(setTransport(response.data[1]));
          dispatch(setHousehold(response.data[2]));
          dispatch(setImmovables(response.data[0]));
          dispatch(isContentLoaded());
        }
    )
  }
}