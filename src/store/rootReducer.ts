import {combineReducers} from "@reduxjs/toolkit";
import {reducer as userReducer} from "@/store/user/slice";

const rootReducer = combineReducers({
    userData: userReducer,
});

export {rootReducer}