// follow.action.js

import { api } from "../../config/api";
import {
  GET_FOLLOWER_COUNT_FAILURE,
  GET_FOLLOWER_COUNT_REQUEST,
  GET_FOLLOWER_COUNT_SUCCESS,
  GET_FOLLOWING_COUNT_FAILURE,
  GET_FOLLOWING_COUNT_REQUEST,
  GET_FOLLOWING_COUNT_SUCCESS,
} from "./follow.actionType";

export const getFollowerCountAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_FOLLOWER_COUNT_REQUEST });
  try {
    const { data } = await api.get(`/api/users/followers/${userId}`); // Replace with your backend route to fetch follower count
    dispatch({ type: GET_FOLLOWER_COUNT_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error fetching follower count:", error);
    dispatch({ type: GET_FOLLOWER_COUNT_FAILURE, payload: error });
  }
};

export const getFollowingCountAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_FOLLOWING_COUNT_REQUEST });
  try {
    const { data } = await api.get(`/api/users/followings/${userId}`); // Replace with your backend route to fetch following count
    dispatch({ type: GET_FOLLOWING_COUNT_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error fetching following count:", error);
    dispatch({ type: GET_FOLLOWING_COUNT_FAILURE, payload: error });
  }
};
