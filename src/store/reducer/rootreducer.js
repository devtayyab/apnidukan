import { combineReducers } from "redux";
import productreducer from "./productreducer";
import userreducer from './userreducer'
export const reducer = combineReducers({
    user: userreducer,
    product: productreducer
})