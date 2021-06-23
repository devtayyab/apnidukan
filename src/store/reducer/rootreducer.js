import { combineReducers } from "redux";
import productreducer from "./productreducer";
export const reducer = combineReducers({
    product: productreducer
})