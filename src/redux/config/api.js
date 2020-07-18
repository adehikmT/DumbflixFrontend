import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "https://dumbflix.herokuapp.com/api/v1",
});

// Alter defaults after instance has been created
export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const BASE_URL = "https://dumbflix.herokuapp.com";
