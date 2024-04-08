import { api } from "../../config/api"
import {CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS} from "./comment.actionType"

export const createCommentAction=(reqData)=>async(dispatch)=>{

    dispatch({type:CREATE_COMMENT_REQUEST})
    try{
const {data} = await api.post(`/api/comments/post/${reqData.postId}`, reqData.data)
dispatch({type:CREATE_COMMENT_SUCCESS, payload:data})
console.log("created comment", data)


    } catch(error){
        console.log("error", error)
dispatch({type:CREATE_COMMENT_FAILURE, payload:error})

    }

}