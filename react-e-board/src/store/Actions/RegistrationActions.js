import axios from "axios";

export const registration = (props) => {
  return (dispatch) => {
    axios.post('http://localhost:8080/registration', {
      username: props.username,
      email: props.email,
      phoneNumber: props.phoneNumber,
      password: props.password,
      enabled: false,
      avatar: props.avatar
    })
  }
}