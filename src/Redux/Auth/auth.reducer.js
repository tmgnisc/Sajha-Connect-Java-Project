import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType"

const initialState = {
    jwt:null

}
const authReducer=(state=initialState, action)=>{
  switch(action.type){
  case LOGIN_REQUEST:
    return {...state, loading:true,error:null}
    case LOGIN_SUCCESS:
        return {...state, jwt:action.payload, loading:false, error:null}
    break;
    default:
        break;

  }
}