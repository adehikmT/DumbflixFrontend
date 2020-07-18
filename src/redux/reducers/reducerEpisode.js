import { POST_EPISODE, GET_EPISODE_FILM } from "../actions/actionTypes";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const GET_EPISODE_FILM_PENDING = `${GET_EPISODE_FILM}_${ActionType.Pending}`;
const GET_EPISODE_FILM_FULFILLED = `${GET_EPISODE_FILM}_${ActionType.Fulfilled}`;
const GET_EPISODE_FILM_REJECTED = `${GET_EPISODE_FILM}_${ActionType.Rejected}`;

export const getEpisodefilm = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODE_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_EPISODE_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_EPISODE_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const POST_EPISODE_PENDING = `${POST_EPISODE}_${ActionType.Pending}`;
const POST_EPISODE_FULFILLED = `${POST_EPISODE}_${ActionType.Fulfilled}`;
const POST_EPISODE_REJECTED = `${POST_EPISODE}_${ActionType.Rejected}`;

export const postEpisode = (state = initialState, action) => {
  switch (action.type) {
    case POST_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_EPISODE_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
