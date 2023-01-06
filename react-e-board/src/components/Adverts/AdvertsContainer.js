import {connect} from "react-redux";
import Adverts from "./Adverts";
import {
  getAdverts,
} from "../../store/Reducers/AdvertsReducer";

let mapStateToProps = (state) => {
  return {

    adverts: state.viewAds.adverts,
    namePage: state.viewAds.namePage,

    currentCategory: state.urls.currentCategory

  }
}

const AdvertsContainer = connect(mapStateToProps, {
  getAdverts
})(Adverts);

export default AdvertsContainer;