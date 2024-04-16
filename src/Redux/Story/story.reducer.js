import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAILURE,
    GET_USER_STORIES_REQUEST,
    GET_USER_STORIES_SUCCESS,
    GET_USER_STORIES_FAILURE,
  } from "./story.actionType";
  
  const initialState = {
    loading: false,
    error: null,
    userStories: [],
  };
  
  export const storyReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_STORY_REQUEST:
      case GET_USER_STORIES_REQUEST:
        return { ...state, loading: true, error: null };
      case CREATE_STORY_SUCCESS:
        return { ...state, loading: false, error: null };
      case GET_USER_STORIES_SUCCESS:
        return { ...state, loading: false, error: null, userStories: action.payload };
      case CREATE_STORY_FAILURE:
      case GET_USER_STORIES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  