import { LOGIN_REQUEST } from "./auth.actionType"

const initialState = {
    jwt:null

}
const authReducer=(state=initialState, action)=>{
  switch(action.type){
  case LOGIN_REQUEST:
    break;
    default:
        break;
        
  }
}