import { combineReducers } from "redux";
import { userInfo } from "./LoginReducer";

const RootReducer = combineReducers({
   user : userInfo 
});

export default RootReducer;