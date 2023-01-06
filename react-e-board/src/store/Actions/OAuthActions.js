import axios from "axios";
import {setOAuthUser} from "../Reducers/OAuthReducer";

export const getOAuthUser = (props) => {
  return (dispatch) => {
    axios.get(`https://api.vk.com/method/users.get?user_ids=${props.userId}&access_token=${props.accessToken}&v=5.131&fields=photo_100`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json',
      }
    }).then(
        response => {
          dispatch(setOAuthUser(response.data.response[0]))
        }
    )
  }
}