import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAILURE,
    GET_USER_STORIES_REQUEST,
    GET_USER_STORIES_SUCCESS,
    GET_USER_STORIES_FAILURE,
  } from "./story.actionType";
  import { api } from "../../config/api";
  
  // Action creators for creating a story
  export const createStoryAction = (storyData) => async (dispatch) => {
    dispatch({ type: CREATE_STORY_REQUEST });
    try {
      const response = await api.post("/api/story", storyData);
      dispatch({ type: CREATE_STORY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_STORY_FAILURE, payload: error.message });
    }
  };
  
  // Action creators for getting user stories
  export const getUserStoriesAction = (userId) => async (dispatch) => {
    dispatch({ type: GET_USER_STORIES_REQUEST });
    try {
      const response = await api.get(`/api/story/user/${userId}`);
      dispatch({ type: GET_USER_STORIES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_STORIES_FAILURE, payload: error.message });
    }
  };
  