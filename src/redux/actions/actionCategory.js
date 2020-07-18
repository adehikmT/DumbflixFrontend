import { GET_ALL_CATEGORY } from "./actionTypes";
import { API } from "../config/api";

export const getAllcategoryCreator = () => {
  return {
    type: GET_ALL_CATEGORY,
    payload: async () => {
      try {
        const { data: dataCategory } = await API.get("/category");
        return dataCategory.data;
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
