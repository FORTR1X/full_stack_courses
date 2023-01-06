import {connect} from "react-redux";

import MyAdverts from "./MyAdverts";
import {setLogout} from "../../../store/Reducers/LoginReducer";
import {getAdverts, getUserProfile} from "../../../store/Actions/MyAdvertsActions";

let mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    adverts: state.profile.adverts,
  }
}

const MyAdvertsContainer = connect(mapStateToProps, {
  getUserProfile, setLogout, getAdverts
})(MyAdverts);

export default MyAdvertsContainer;