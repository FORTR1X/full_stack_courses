import {connect} from "react-redux";
import EditAdvert from "./EditAdvert";
import {
  deleteAdvert,
  getCurrentAdvert, getCurrentCharact, getTokenData,
  updateAdvert,
  updateCharact
} from "../../store/Actions/EditAdvertActions";
import {
  changeBrand, changeCapacity,
  changeCategory,
  changeDescription, changeGears,
  changeHeader, changeMilage, changeMonthlyCost,
  changePrice, changeRelaseYear, changeRent, changeRentPeriod, changeRoomNumber, changeStage, changeStages,
  changeSubCategory, changeWasInUse, changeWheelDrive
} from "../../store/Reducers/CreateAdReducer";
import {getCategories, getSubCategories} from "../../store/Actions/CreateAdActions";

const mapStateToProps = (state) => {
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
    newCharact: state.create.newCharact,

    currentAdvert: state.editAdvert.currentAdvert,
    currentCharact: state.editAdvert.currentCharact,
    tokenData: state.editAdvert.tokenData,

    deleted: state.editAdvert.deleted
  }
}

const EditAdvertContainer = connect(mapStateToProps, {
  changeCategory, changeSubCategory, changeHeader,
  changePrice, changeDescription, changeRent,
  changeRentPeriod, changeRoomNumber, changeStage,
  changeStages, changeBrand, changeRelaseYear,
  changeMilage, changeCapacity, changeWheelDrive,
  changeGears, changeWasInUse, getCategories, getSubCategories, changeMonthlyCost,
  updateAdvert, updateCharact, getCurrentAdvert, getTokenData, getCurrentCharact, deleteAdvert
})(EditAdvert);

export default EditAdvertContainer;