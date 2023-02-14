import axios from "axios";
import localStorageService from "./localStorage.service";
import config from "../config.json";

const httpAuth = axios.create({
  // baseURL: "https://identitytoolkit.googleapis.com/v1/",
  baseURL: config.apiEndpoint + "auth/"
  // params: {
  //   key: process.env.REACT_APP_FIREBASE_KEY
  // }
});

const authService = {
  register: async (payload) => {
    const { data } = await httpAuth.post(`signUp`, payload); // ->`accounts:signUp`
    return data;
  },
  login: async ({ email, password }) => {
    const { data } = await httpAuth.post(`signInWithPassword`, { // ->`accounts:signInWithPassword`
      email,
      password,
      returnSecureToken: true
    });
    return data;
  },
  refresh: async () => {
    // const url = `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FIREBASE_KEY}`;

    const { data } = await httpAuth.post(`token`, {
      refresh_token: localStorageService.getRefreshToken()
    });
    return data;
  }
};

export default authService;
