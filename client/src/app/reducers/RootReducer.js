import { combineReducers } from "redux";
import { userInfo } from "./LoginReducer";

const RootReducer = combineReducers({
   userInfo : userInfo 
});

export default RootReducer;