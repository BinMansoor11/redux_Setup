import { GET_RESTAURANT_DATA } from '../actions/types';

const initialState = {
  restaurantData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANT_DATA:
      return {
        ...state,
        restaurantData: action.payload,
      };
      // case SELECTED_MEAL_ARR:
      //   return {
      //     ...state,
      //     selectedMealArr: action.payload,
      //   };

      break;
    default:
      return state;
  }
}
