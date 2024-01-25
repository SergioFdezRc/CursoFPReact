import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user.reducers";


const reducers = combineReducers({
    userState: userReducer,
});

export default reducers;