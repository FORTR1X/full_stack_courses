import React from 'react';
import CreateAd from "./CreateAd";

import {connect} from "react-redux";
import {
  changeBrand, changeCapacity,
  changeDescription, changeGears,
  changeHeader, changeMilage,
  changePrice, changeRelaseYear,
  changeRent, changeRentPeriod,
  changeRoomNumber, changeCategory, changeSubCategory,
  changeStage, changeStages,
  changeWasInUse, changeWheelDrive, changeMonthlyCost
} from "../../store/Reducers/CreateAdReducer";
import {createAdvert, createCharacteristic, getCategories, getSubCategories} from "../../store/Actions/CreateAdActions";

let mapStateToProps = (state) => {
  return {
    header: state.create.header,
    price: state.create.price,
    description: state.create.description,

    category: state.create.category,
    subcategory: state.create.subcategory,

    rent: state.create.rent,
    rentPeriod: state.create.rentPeriod,
    monthlyCost: state.create.monthlyCost,
    roomNumber: state.create.roomNumber,
    stage: state.create.stage,
    stages: state.create.stages,

    brand: state.create.brand,
    relaseYear: state.create.relaseYear,
    milage: state.create.milage,
    capacity: state.create.capacity,
    wheelDrive: state.create.wheelDrive,
    gears: state.create.gears,

    wasInUse: state.create.wasInUse,

    categoriesOption: state.create.categoriesOption,
    subcategoriesOption: state.create.subcategoriesOption,
    boolOption: state.create.boolOption,
    rentOption: state.create.rentOption,
    wheelDriveOption: state.create.wheelDriveOption,
    gearsOption: state.create.gearsOption,

    newAdvert: state.create.newAdvert,
    newCharact: state.create.newCharact
  }
};

const CreateAdContainer = connect(mapStateToProps, {
      changeCategory, changeSubCategory, changeHeader,
      changePrice, changeDescription, changeRent,
      changeRentPeriod, changeRoomNumber, changeStage,
      changeStages, changeBrand, changeRelaseYear,
      changeMilage, changeCapacity, changeWheelDrive,
      changeGears, changeWasInUse, getCategories, getSubCategories, changeMonthlyCost,
      createCharacteristic, createAdvert
})(CreateAd);


export default CreateAdContainer;