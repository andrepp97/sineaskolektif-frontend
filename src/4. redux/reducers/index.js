import { combineReducers } from "redux";
import userReducer from './userReducer';
import regisReducer from './regisReducer';

export default combineReducers({
    userData: userReducer,
    regisData: regisReducer
});