import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS } from "./post.actionType"
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