import React from 'react';
import {connect} from "react-redux";
import ViewAd from "./ViewAd";
import {getAdvert, getCategory, getCharacteristic, getOwner, getSubcategory} from "../../store/Actions/ViewAdActions";
import {getTokenData} from "../../store/Actions/EditAdvertActions";

let mapStateToProps = (state) => {
  return {
    advert: state.viewAd.advert,
    characteristic: state.viewAd.characteristic,
    category: state.viewAd.category,
    subcategory: state.viewAd.subcategory,
    owner: state.viewAd.owner,

    tokenData: state.editAdvert.tokenData
  }
}

const ViewAdContainer = connect(mapStateToProps, {
  getAdvert, getCharacteristic, getCategory, getOwner, getSubcategory,
  getTokenData
})(ViewAd);

export default ViewAdContainer;