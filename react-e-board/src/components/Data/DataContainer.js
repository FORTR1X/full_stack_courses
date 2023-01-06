import {connect} from "react-redux";
import Data from "./Data";
import {getCurrentCategory} from "../../store/Reducers/UrlReducer";
import {getCategories, getSubcategories} from "../../store/Actions/UrlActions";

const mapStateToProps = (state) => {
  return {
    isContentLoaded: state.urls.isContentLoaded,
    currentCategory: state.urls.currentCategory
  }
}

const DataContainer = connect(mapStateToProps, {
  getSubcategories, getCategories, getCurrentCategory
})(Data);

export default DataContainer;