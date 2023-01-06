import axios from "axios";
import {setNewAdvert} from "../Reducers/CreateAdReducer";
import {setCurrentAdvert, setCurrentCharact, setTokenData, delAdvert} from "../Reducers/EditAdvertReducer";

export const updateAdvert = (props) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/ad/update/id${props.adId}`, props.advert, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => dispatch(setNewAdvert(response.data))
    )
  }
}

export const updateCharact = (props) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/advert/id${props.adId}/characteristic`, props.characteristic, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    });
  }
}

export const getCurrentAdvert = (adId) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/ad/view/id${adId}`).then(
      response => dispatch(setCurrentAdvert(response.data))
    )
  }
}

export const getTokenData = (token) => {
  return (dispatch) => {
    axios.post(`http://localhost:8080/oauth/check_token?token=${token}`).then(
        response => dispatch(setTokenData(response.data))
    ).catch(
        error => dispatch(setTokenData(error.data))
    )
  }
}

export const getCurrentCharact = (adId) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/characteristic/advert/id${adId}`).then(
        response => dispatch(setCurrentCharact(response.data.characteristic))
    )
  }
}

export const deleteAdvert = (props) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8080/ad/id${props.adId}`, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
      dispatch(delAdvert())
    )
  }
}