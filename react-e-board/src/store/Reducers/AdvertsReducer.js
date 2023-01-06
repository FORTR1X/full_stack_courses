import {getCategoryAdverts, getNewAds, getSearchedAds, getSubcategoryAdverts} from "../Actions/AdvertsActions";

const SET_ADVERTS = 'SET_ADVERTS';
const SET_LOCATION = 'SET_LOCATION';

let initialState = {

  adverts: [],
  namePage: '',

}

const advertsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_ADVERTS:
      let newAdvertList = [...state.adverts];
      action.ads.map(ad => {
        newAdvertList = [...newAdvertList, ad]
      });

      return {
        ...state,
        adverts: newAdvertList,
      }


    case SET_LOCATION:
      return {
        ...state,
        namePage: action.namePage
      }

    default: return state;
  }
}

export const setAdverts = (ads) => ({type: SET_ADVERTS, ads});

const setNamePage = (namePage) => ({ type: SET_LOCATION, namePage });

export const getAdverts = (props) => {

  return (dispatch) => {

    if (props.currentCategory.categoryUrl) {
      dispatch(getCategoryAdverts({currentCategory: props.currentCategory, page: props.page}));
      dispatch(setNamePage(props.currentCategory.categoryName));
    }

    if (props.currentCategory.subcategoryUrl) {
      dispatch(getSubcategoryAdverts({currentCategory: props.currentCategory, page: props.page}));
      dispatch(setNamePage(props.currentCategory.subcategories));
    }

    if (props.currentCategory.url) {
      switch (props.currentCategory.url) {
        case '/':
          dispatch(getNewAds(props.page));
          break;

        case '/ad/search/':
          dispatch(getSearchedAds({search: props.search, page: props.page}));
          break;

        default: return null;
      }
      dispatch(setNamePage(props.currentCategory.name));
    }

  }
}

export default advertsReducer;