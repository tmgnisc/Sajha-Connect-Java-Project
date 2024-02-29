import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk, withExtraArgument } from 'redux-thunk';

import { authReducer } from "./Auth/auth.reducer"


const rootReducers=combineReducers({
auth:authReducer
})
export const store=legacy_createStore(rootReducers, applyMiddleware(thunk))