// auth.actions.js

import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SEARCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "./auth.actionType";

export const LoginUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);

    if (data.token) {
      localStorage.setItem("jwt", data.token);
    }

    console.log("login success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("----------", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const registerUserAction = (registerData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data);

    if (data.token) {
      localStorage.setItem("jwt", data.token);
      console.log("login success", data);
    }

    console.log("register success", data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("----------", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const logoutAction = () => async (dispatch) => {
  // Clear JWT token from localStorage
  localStorage.removeItem("jwt");
  // Dispatch the logout action
  dispatch({ type: LOGOUT });
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("profile--- ", data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("----------", error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error });
  }
};

export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { data } = await axios.put(`${API_BASE_URL}/api/users`, reqData);

    console.log("profile Update ", data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("----------", error);
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error });
  }
};

export const searchUser = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_USER_REQUEST });
  try {
    const { data } = await axios.get(`/api/users/search?query=${query}`);

    console.log("search user--- ", data);
    dispatch({ type: SEARCH_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log("----------", error);
    dispatch({ type: SEARCH_USER_FAILURE, payload: error });
  }
};
