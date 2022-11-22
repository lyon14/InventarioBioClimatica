import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import objeto from "./objeto";

const rootReducer = combineReducers({
    // Add your reducers here
    users,
    objeto,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
