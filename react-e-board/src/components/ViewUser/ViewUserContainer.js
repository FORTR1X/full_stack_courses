import {connect} from "react-redux";
import ViewUser from "./ViewUser";
import {getAdverts, getUser} from "../../store/Actions/ViewUserActions";

const mapStateToProps = (state) => {
  return {
    user: state.viewUser.user,
    adverts: state.viewUser.adverts
  }
}

const ViewUserContainer = connect(mapStateToProps, {
  getUser, getAdverts
})(ViewUser)

export default ViewUserContainer;