const SET_TRANSPORT = 'SET_TRANSPORT';
const SET_IMMOVABLES = 'SET_IMMOVABLES';
const SET_HOUSEHOLD = 'SET_HOUSEHOLD';

const SET_APPARTAMENTS = 'SET_APPARTAMENTS';
const SET_HOUSES = 'SET_HOUSES';

const SET_CARS = 'SET_CARS';
const SET_MOTO = 'SET_MOTO';

const SET_APPLIANCE = 'SET_APPLIANCE';
const SET_FURNITURE = 'SET_FURNITURE';

const CHECK_CONTENT = 'CHECK_CONTENT';

const CURRENT_CATEGORY = 'CURRENT_CATEGORY';

let initialState = {

  mainPage: {url: '/', name: 'Новые объявления'},
  adSearch: {url: '/ad/search/', name: 'Поиск по объявлениям'},

  transport: null,
  immovables: null,
  household: null,

  appartaments: null,
  houses: null,

  cars: null,
  moto: null,

  appliance: null,
  furniture: null,

  isContentLoaded: false,

  currentCategory: null,
}

const urlReducer = (state = initialState, action) => {

  switch (action.type) {

    case CURRENT_CATEGORY: {
      switch (action.location) {

        case state.mainPage.url:
          return {...state, currentCategory: state.mainPage}

        case state.adSearch.url:
          return {...state, currentCategory: state.adSearch}

        case state.transport.categoryUrl:
          return {...state, currentCategory: state.transport}

        case state.immovables.categoryUrl:
          return {...state, currentCategory: state.immovables}

        case state.household.categoryUrl:
          return {...state, currentCategory: state.household}

        case state.appartaments.subcategoryUrl:
          return {...state, currentCategory: state.appartaments}

        case state.houses.subcategoryUrl:
          return {...state, currentCategory: state.houses}

        case state.cars.subcategoryUrl:
          return {...state, currentCategory: state.cars}

        case state.moto.subcategoryUrl:
          return {...state, currentCategory: state.moto}

        case state.appliance.subcategoryUrl:
          return {...state, currentCategory: state.appliance}

        case state.furniture.subcategoryUrl:
          return {...state, currentCategory: state.furniture}

        default: return {...state, currentCategory: {error: 'none'}};
      }
    }

    case SET_TRANSPORT:
      return {
        ...state,
        transport: action.transport
      }

    case SET_IMMOVABLES:
      return {
        ...state,
        immovables: action.immovables
      }

    case SET_HOUSEHOLD:
      return {
        ...state,
        household: action.household
      }

    case SET_APPARTAMENTS:
      return {
        ...state,
        appartaments: action.data
      }

    case SET_HOUSES:
      return {
        ...state,
        houses: action.data
      }

    case SET_CARS:
      return {
        ...state,
        cars: action.data
      }

    case SET_MOTO:
      return {
        ...state,
        moto: action.data
      }

    case SET_APPLIANCE:
      return {
        ...state,
        appliance: action.data
      }

    case SET_FURNITURE:
      return {
        ...state,
        furniture: action.data
      }

    case CHECK_CONTENT:
      return {
        ...state,
        isContentLoaded: !(state.transport == null || state.immovables == null || state.household == null ||
            state.appartaments == null || state.houses == null || state.cars == null || state.moto == null ||
            state.appliance == null || state.furniture == null)
      }

    default: return state;
  }
}

export const setTransport = (transport) => ({ type: SET_TRANSPORT, transport });
export const setImmovables = (immovables) => ({ type: SET_IMMOVABLES, immovables });
export const setHousehold = (household) => ({ type:SET_HOUSEHOLD, household });

export const setAppartaments = (data) => ({ type: SET_APPARTAMENTS, data });
export const setHouses = (data) => ({ type: SET_HOUSES, data });

export const setCars = (data) => ({ type: SET_CARS, data });
export const setMoto = (data) => ({ type: SET_MOTO, data });

export const setAppliance = (data) => ({ type: SET_APPLIANCE, data });
export const setFurniture = (data) => ({ type: SET_FURNITURE, data });

export const isContentLoaded = () => ({ type: CHECK_CONTENT });

export const getCurrentCategory = (location) => ({ type: CURRENT_CATEGORY, location });

export default urlReducer;