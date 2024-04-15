import axios from "axios";
import { API_BASE_URL } from "../../config/api";
import {
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
} from "./follow.actionType";

export const followUser = (userId) => async (dispatch) => {
  dispatch({ type: FOLLOW_USER_REQUEST });
  try {
    const jwt = localStorage.getItem("jwt");
    const { data } = await axios.put(
      `${API_BASE_URL}/api/users/follow/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error following user:", error);
    dispatch({ type: FOLLOW_USER_FAILURE, payload: error });
  }
};

export const unfollowUser = (userId) => async (dispatch) => {
  dispatch({ type: UNFOLLOW_USER_REQUEST });
  try {
    const jwt = localStorage.getItem("jwt");
    const { data } = await axios.put(
      `${API_BASE_URL}/api/users/unfollow/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error unfollowing user:", error);
    dispatch({ type: UNFOLLOW_USER_FAILURE, payload: error });
  }
};
