import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    // quan ly child reducer
    userReducer
});
export default rootReducer;