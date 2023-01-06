import {connect} from "react-redux";
import Router from "./Router";

const mapStateToProps = (state) => {
  return {
    transport: state.urls.transport,
    immovables: state.urls.immovables,
    household: state.urls.household,

    appartaments: state.urls.appartaments,
    houses: state.urls.houses,

    cars: state.urls.cars,
    moto: state.urls.moto,

    appliance: state.urls.appliance,
    furniture: state.urls.furniture,

    mainPage: state.urls.mainPage,
    adSearch: state.urls.adSearch,

    isContentLoaded: state.urls.isContentLoaded,
    currentCategory: state.urls.currentCategory,

    isAuth: state.auth.isAuth
  }
}

const RouterContainer = connect(mapStateToProps)(Router);

export default RouterContainer;