import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  SEARCH_USER_SUCCESS,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_SUCCESS
} from "./auth.actionType";

const initialState = {
  user: null,
  searchUser: [],
  followedUsers: []
};

export const followReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_PROFILE_SUCCESS:
      case UPDATE_PROFILE_SUCCESS:
          return { ...state, user: action.payload };

      case SEARCH_USER_SUCCESS:
          return { ...state, searchUser: action.payload };

      case FOLLOW_USER_SUCCESS:
          // Logic to update followed users list
          return { ...state, followedUsers: action.payload };

      case UNFOLLOW_USER_SUCCESS:
          // Logic to update followed users list
          return { ...state, followedUsers: action.payload };

      default:
          return state;
  }
};
