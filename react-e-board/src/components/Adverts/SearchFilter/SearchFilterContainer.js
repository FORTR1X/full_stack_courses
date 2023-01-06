import {connect} from "react-redux";
import SearchFilter from "./SearchFilter";
import {getCategories, getSubCategories} from "../../../store/Actions/CreateAdActions";
import {getAdsByFilter, getTemplate} from "../../../store/Actions/SearchFilterActions";
import {
  changeBrand, changeCapacity, changeGears, changeMilage, changeMonthlyCost, changeRelaseYear,
  changeRent,
  changeRentPeriod,
  changeRoomNumber,
  changeStage,
  changeStages, changeWasInUse, changeWheelDrive
} from "../../../store/Reducers/CreateAdReducer";

const mapStateToProps = (state) => {
  return {
    currentCategory: state.urls.currentCategory,

    categoryList: state.create.categoriesOption,
    subcategoryList: state.create.subcategoriesOption,

    template: state.searchFilter.template,

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

    boolOption: state.create.boolOption,
    rentOption: state.create.rentOption,
    wheelDriveOption: state.create.wheelDriveOption,
    gearsOption: state.create.gearsOption
  }
}

const SearchFilterContainer = connect(mapStateToProps, {
  getCategories, getSubCategories, getTemplate, getAdsByFilter,

  changeRent, changeRentPeriod, changeRoomNumber, changeStage,
  changeStages, changeBrand, changeRelaseYear,
  changeMilage, changeCapacity, changeWheelDrive,
  changeGears, changeWasInUse, changeMonthlyCost
})(SearchFilter);

export default SearchFilterContainer;
