import axios from "axios";

export const API_BASE_URL="http://localhost:5454";
// yesma backend ko api url auxa


const jwtToken= localStorage.getItem("jwt")
//axios entrance
export const api=axios.create({baseURL:API_BASE_URL, headers:{
    "Authorization":`Bearer ${jwtToken}`,
    "Content-Type":"application/json"
}})