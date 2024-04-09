import { CREATE_COMMENT_SUCCESS } from "../Comment/comment.actionType";
import {
    CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USERS_POST_REQUEST,
  GET_USERS_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";

const initialState = {
  post: null,
  loading: false,
  error: null,
  posts: [],
  like: null,
  comment:[],
  newComment:null
};

// export const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_POST_REQUEST:
//     case GET_ALL_POST_REQUEST:
//     case LIKE_POST_REQUEST:
//       return { ...state, error: null, loading: false };

//       case CREATE_POST_SUCCESS:
//         return {
//             ...state, post:action.payload, posts:[action.payload,...state.posts],
//             loading:false,
//             error:null

//         }
// case GET_ALL_POST_SUCCESS:
//     return{
//         ...state, posts:action.payload, comments:action.payload.comments, loading:false, error:null,}
    
//     case LIKE_POST_SUCCESS:
//         return{
//             ...state, like:action.payload, posts:state.posts.map((item)=>item.id===action.payload.id?action.payload:item),
//             loading:false, error:null
//         }
// case CREATE_COMMENT_SUCCESS:
//   return {
//     ...state, newComment:action.payload, loading:false, error:null
//   }

//         case CREATE_POST_FAILURE:
//             case GET_ALL_POST_FAILURE:
//                 case LIKE_POST_FAILURE:
//             return{...state, error:action.payload, loading:false}

//     default:
//       return state;
//   }
// };

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
    case GET_ALL_POST_REQUEST:
    case LIKE_POST_REQUEST:
      return { ...state, error: null, loading: true }; // Set loading to true when starting the request

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: [action.payload, ...state.posts], // Add new post to the beginning of the posts array
        loading: false,
        error: null,
      };

    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload, // Update posts array with fetched posts
        loading: false,
        error: null,
      };

    case LIKE_POST_SUCCESS:
      return {
        ...state,
        like: action.payload,
        posts: state.posts.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ), // Update the liked post in the posts array
        loading: false,
        error: null,
      };

      case GET_USERS_POST_REQUEST:
  return { ...state, loading: true, error: null };


  case GET_USERS_POST_SUCCESS:
  return {
    ...state,
    posts: action.payload, // Assuming the fetched posts are in action.payload
    loading: false,
    error: null,
  };



    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        newComment: action.payload, // Set the new comment in the state
        loading: false,
        error: null,
      };

    case CREATE_POST_FAILURE:
    case GET_ALL_POST_FAILURE:
    case LIKE_POST_FAILURE:
      return { ...state, error: action.payload, loading: false }; // Set error and loading to false on failure

    default:
      return state;
  }
};

