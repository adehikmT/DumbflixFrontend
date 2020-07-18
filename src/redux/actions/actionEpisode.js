import { POST_EPISODE, GET_EPISODE_FILM } from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const postEpisodeCreator = (body, token) => {
  return {
    type: POST_EPISODE,
    payload: async () => {
      try {
        const { data: dataEpisode } = await API.post(
          "/episode",
          body,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataEpisode.data;
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

export const getEpisodefilmCreator = (id, token) => {
  return {
    type: GET_EPISODE_FILM,
    payload: async () => {
      try {
        const { data: dataEpisode } = await API.get(
          `/filem/${id}/episodes`,
          setAuthToken(token)
        );
        // console.log(dataFilm);
        return dataEpisode.data;
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
