import {connect} from "react-redux";

import ProfileSettings from "./ProfileSettings";
import {changeConfirmPassword, changePassword, setAvatar} from "../../../store/Reducers/ProfileSettingsReducer";
import {setLogout} from "../../../store/Reducers/LoginReducer";
import {getAdverts, getUserProfile} from "../../../store/Actions/MyAdvertsActions";
import {changeUser, deleteProfile} from "../../../store/Actions/ProfileSettingsActions";

let mapStateToProps = (state) => {
  return {
    password: state.settings.password,
    confirmPassword: state.settings.confirmPassword,
    avatar: state.settings.avatar,
    deleted: state.settings.deleted,

    user: state.profile.user
  }
}

const ProfileSettingsContainer = connect(mapStateToProps, {
  changePassword, changeConfirmPassword, setAvatar,
  getUserProfile, setLogout, getAdverts, changeUser,
  deleteProfile
})(ProfileSettings);

export default ProfileSettingsContainer;