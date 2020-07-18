import {
  GET_ALL_FILM,
  POST_FILM,
  DELETE_FILM,
  DETAIL_FILM,
} from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const getAllfilmCreator = () => {
  return {
    type: GET_ALL_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.get("/film");
        return dataFilm.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          console.log(error.response)
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};

export const getDetailfilmCreator = (id, token) => {
  return {
    type: DETAIL_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.get(
          "/film/" + id,
          setAuthToken(token)
        );
        return dataFilm.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};

export const postFilmCreator = (body, token) => {
  return {
    type: POST_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.post(
          "/film",
          body,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataFilm.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          // console.log(dataError.error);
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};

export const deleteFilmCreator = (id, token) => {
  return {
    type: DELETE_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.delete(
          "/film/" + id,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataFilm.data;
      } catch (error) {
        // console.log(error);
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          // console.log(dataError.error);
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};
