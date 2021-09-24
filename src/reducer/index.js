import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
export const rootReducer = combineReducers({
    AuthReducer,
    ProductReducer,
});
