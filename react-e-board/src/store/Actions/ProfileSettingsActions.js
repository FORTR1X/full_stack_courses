import axios from "axios";
import {setLogout, setUser} from "../Reducers/LoginReducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import {setAdverts, setUserProfile} from "../Reducers/MyAdvertsReducer";
import {deleteUser} from "../Reducers/ProfileSettingsReducer";

export const changeUser = (props) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/user/id${props.id}`, {avatar: props.avatar, password: props.password}, {
      headers: {
        'Authorization': `bearer ${props.token}`
      }
    }).then(
        response => {
          dispatch(setUser(response.data));
          localStorage.setItem('avatar', response.data.avatar);
        }
    );
  }
}

export const deleteProfile = (userId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8080/user/id${userId}`).then(
        response => {
          dispatch(deleteUser());
          dispatch(setLogout());
        }
    ).catch(
        error => {
          console.log(error)
        }
    )
  }
}