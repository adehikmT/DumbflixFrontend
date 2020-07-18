import { GET_ALL_CATEGORY } from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const GET_ALL_CATEGORY_PENDING = `${GET_ALL_CATEGORY}_${ActionType.Pending}`;
const GET_ALL_CATEGORY_FULFILLED = `${GET_ALL_CATEGORY}_${ActionType.Fulfilled}`;
const GET_ALL_CATEGORY_REJECTED = `${GET_ALL_CATEGORY}_${ActionType.Rejected}`;

export const getAllcategory = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CATEGORY_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ALL_CATEGORY_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
