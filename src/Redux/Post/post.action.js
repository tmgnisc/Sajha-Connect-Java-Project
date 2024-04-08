import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"
import { api } from "../../config/api"

export const createPostAction=(postData)=>async(dispatch)=>{

    dispatch({type:CREATE_POST_REQUEST})
    try{
const {data} = await api.post('/api/posts', postData)
dispatch({type:CREATE_POST_SUCCESS, playlod:data})
console.log("created post", data)


    } catch(error){
        console.log("error", error)
dispatch({type:CREATE_POST_FAILURE, playlod:error})

    }

    
}

export const getAllPostAction=()=>async(dispatch)=>{

    dispatch({type:GET_ALL_POST_REQUEST})
    try{
const {data} = await api.get('/api/posts')
dispatch({type:GET_ALL_POST_SUCCESS, playlod:data})
console.log("get all post", data)


    } catch(error){
        console.log("error", error)
dispatch({type:GET_ALL_POST_FAILURE, playlod:error})

    }

}

export const getUsersPostAction=(userId)=>async(dispatch)=>{

    dispatch({type:GET_USERS_POST_REQUEST})
    try{
const {data} = await api.get(`/api/posts/user/${userId}`)
dispatch({type:GET_USERS_POST_SUCCESS, playlod:data})
console.log("get users post", data)


    } catch(error){
        console.log("error", error)
dispatch({type:GET_USERS_POST_FAILURE, playlod:error})

    }

}

export const likePostAction=(postId)=>async(dispatch)=>{

    dispatch({type:LIKE_POST_REQUEST})
    try{
const {data} = await api.get(`/api/posts/like/${postId}`)
dispatch({type:LIKE_POST_SUCCESS, playlod:data})
console.log("Like post", data)


    } catch(error){
        console.log("error", error)
dispatch({type:LIKE_POST_FAILURE, playlod:error})

    }

}