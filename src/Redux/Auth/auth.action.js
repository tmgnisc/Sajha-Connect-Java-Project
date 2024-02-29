import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType"

export const LoginUserAction=(LoginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signin`, LoginData.data)

        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
           
        }
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt})
    } catch (error) {

        console.log("----------", error);
        dispatch({type:LOGIN_FAILURE, payload:error})
    }
}

export const registerUserAction=(LoginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const{data}=await axios.post(`${API_BASE_URL}/auth/signup`, LoginData.data)

        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
            console.log("login vayo hai ta", data)
           
        }

        console.log("register vayo hai ta ", data)
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt})
    } catch (error) {

        console.log("----------", error);
        dispatch({type:LOGIN_FAILURE, payload:error})
    }
}