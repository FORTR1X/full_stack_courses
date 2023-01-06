
const SET_TEMPLATE = 'SET_TEMPLATE';

let initialState = {
  template: null
}

const searchFilterReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TEMPLATE:
      return {
        ...state,
        template: action.template
      }

    default: return state;
  }
}

export const setTemplate = (template) => ({ type: SET_TEMPLATE, template })

export default searchFilterReducer;