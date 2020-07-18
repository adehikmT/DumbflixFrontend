import { AUTH_REGISTER, AUTH_LOGIN } from "./actionTypes";
import { API, setAuthToken } from "../config/api";

export const authRegistCreator = (body) => {
  return {
    type: AUTH_REGISTER,
    payload: async () => {
      try {
        const { data: dataReg } = await API.post("/registration", body);

        // console.log(dataFilm);/auth/user
        localStorage.setItem("token", dataReg.data.token);

        const {
          data: { data: dataUser },
        } = await API.get("/auth/user", setAuthToken(dataReg.data.token));

        return dataUser;
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

export const authLoginCreator = (body) => {
  return {
    type: AUTH_LOGIN,
    payload: async () => {
      try {
        const { data: dataReg } = await API.post("/login", body);

        // console.log(dataFilm);/auth/user
        localStorage.setItem("token", dataReg.data.token);

        const {
          data: { data: dataUser },
        } = await API.get("/auth/user", setAuthToken(dataReg.data.token));

        return dataUser;
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
