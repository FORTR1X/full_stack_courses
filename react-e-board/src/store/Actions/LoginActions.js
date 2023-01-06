import axios from "axios";
import {setAuth, setIsAuth, setLogout, setUser} from "../Reducers/LoginReducer";

export const checkIsAuth = (token) => {
  return (dispatch) => {
    axios.post(`http://localhost:8080/oauth/check_token?token=${token}`).then(
        dispatch(setIsAuth(true))
    ).catch(
        () => {
          dispatch(setLogout());
          localStorage.clear();
        }
    )
  }
}

export const getAuth = (props) => {
  return (dispatch) => {
    axios.post('http://localhost:8080/oauth/token', `grant_type=password&scope=ad&username=${props.login}&password=${props.password}&client_id=ad-client&client_secret=zxc`, {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(
        response => {
          dispatch(setAuth(response.data));
        }
    );
  }
}

export const getUser = (props) => {
  return (dispatch) => {
    axios.get(`http://localhost:8080/user/${props.login}`, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => {
          dispatch(setUser(response.data))
        }
    )
  }
}