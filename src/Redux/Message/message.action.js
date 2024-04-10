import * as actionType from "./message.actionType"
import {api} from "../../config/api"

export const createMessage=(message)=>async(dispatch)=>{
    dispatch({type:actionType.CREATE_MESSAGE_REQUEST})
    try{
const{data}=await api.post(`/api/messages/chat/${message.chatId}`,message)
console.log("created message", data)
dispatch({type:actionType.CREATE_MESSAGE_SUCCESS, payload:data})
    } catch(error){
        console.log("Catch Error---", error)
dispatch({
    type:actionType.CREATE_MESSAGE_FAILURE, payload:error
})
    }
}

export const createChat=(chat)=>async(dispatch)=>{
    dispatch({type:actionType.CREATE_CHAT_REQUEST})
    try{
const{data}=await api.post(`/api/chats`,chat)
console.log("created chat", data)
dispatch({type:actionType.CREATE_CHAT_SUCCESS, payload:data})
    } catch(error){
        console.log("Catch Error---", error)
dispatch({
    type:actionType.CREATE_CHAT_FAILURE, payload:error
})
    }
}

export const getAllChats=()=>async(dispatch)=>{
    dispatch({type:actionType.GET_ALL_CHATS_REQUEST})
    try{
const{data}=await api.get(`/api/chats`)
console.log("get all chats", data)
dispatch({type:actionType.GET_ALL_CHATS_SUCCESS, payload:data})
    } catch(error){
        console.log("Catch Error---", error)
dispatch({
    type:actionType.GET_ALL_CHATS_FAILURE, payload:error
})
    }
}