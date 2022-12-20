import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectStatusLogin = createSelector(
    [(store: RootState) => store.users.loginStatus],
    (loginStatus) => loginStatus
)