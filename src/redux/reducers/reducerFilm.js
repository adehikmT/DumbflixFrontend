import {
  GET_ALL_FILM,
  POST_FILM,
  DELETE_FILM,
  DETAIL_FILM,
} from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const GET_ALL_FILM_PENDING = `${GET_ALL_FILM}_${ActionType.Pending}`;
const GET_ALL_FILM_FULFILLED = `${GET_ALL_FILM}_${ActionType.Fulfilled}`;
const GET_ALL_FILM_REJECTED = `${GET_ALL_FILM}_${ActionType.Rejected}`;

export const getAllfilm = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ALL_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const DETAIL_FILM_PENDING = `${DETAIL_FILM}_${ActionType.Pending}`;
const DETAIL_FILM_FULFILLED = `${DETAIL_FILM}_${ActionType.Fulfilled}`;
const DETAIL_FILM_REJECTED = `${DETAIL_FILM}_${ActionType.Rejected}`;

export const getDetailfilm = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DETAIL_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const POST_FILM_PENDING = `${POST_FILM}_${ActionType.Pending}`;
const POST_FILM_FULFILLED = `${POST_FILM}_${ActionType.Fulfilled}`;
const POST_FILM_REJECTED = `${POST_FILM}_${ActionType.Rejected}`;

export const postFilm = (state = initialState, action) => {
  switch (action.type) {
    case POST_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const DELETE_FILM_PENDING = `${DELETE_FILM}_${ActionType.Pending}`;
const DELETE_FILM_FULFILLED = `${DELETE_FILM}_${ActionType.Fulfilled}`;
const DELETE_FILM_REJECTED = `${DELETE_FILM}_${ActionType.Rejected}`;

export const deleteFilm = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DELETE_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
