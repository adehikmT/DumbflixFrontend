import { AUTH_REGISTER, AUTH_LOGIN } from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const AUTH_REGISTER_PENDING = `${AUTH_REGISTER}_${ActionType.Pending}`;
const AUTH_REGISTER_FULFILLED = `${AUTH_REGISTER}_${ActionType.Fulfilled}`;
const AUTH_REGISTER_REJECTED = `${AUTH_REGISTER}_${ActionType.Rejected}`;

const AUTH_LOGIN_PENDING = `${AUTH_LOGIN}_${ActionType.Pending}`;
const AUTH_LOGIN_FULFILLED = `${AUTH_LOGIN}_${ActionType.Fulfilled}`;
const AUTH_LOGIN_REJECTED = `${AUTH_LOGIN}_${ActionType.Rejected}`;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGISTER_PENDING:
    case AUTH_LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_REGISTER_FULFILLED:
    case AUTH_LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case AUTH_REGISTER_REJECTED:
    case AUTH_LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
