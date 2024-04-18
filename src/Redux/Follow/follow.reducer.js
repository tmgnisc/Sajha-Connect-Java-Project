import {
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  SEARCH_USER_SUCCESS,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_SUCCESS,
  GET_FOLLOWER_COUNT_SUCCESS,
  GET_FOLLOWER_COUNT_FAILURE,
  GET_FOLLOWING_COUNT_SUCCESS,
  GET_FOLLOWING_COUNT_FAILURE,
} from "./auth.actionType";

const initialState = {
  user: null,
  searchUser: [],
  followedUsers: [],
  followerCount: null,
  followingCount: null,
};

export const followReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, user: action.payload };

    case SEARCH_USER_SUCCESS:
      return { ...state, searchUser: action.payload };

    case FOLLOW_USER_SUCCESS:
    case UNFOLLOW_USER_SUCCESS:
      return { ...state, followedUsers: action.payload };

    case GET_FOLLOWER_COUNT_SUCCESS:
      return { ...state, followerCount: action.payload };

    case GET_FOLLOWER_COUNT_FAILURE:
      return { ...state, followerCount: null };

    case GET_FOLLOWING_COUNT_SUCCESS:
      return { ...state, followingCount: action.payload };

    case GET_FOLLOWING_COUNT_FAILURE:
      return { ...state, followingCount: null };

    default:
      return state;
  }
};
