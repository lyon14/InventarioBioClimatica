import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectStatusLogout = createSelector(
    [(store: RootState) => store.users.logoutStatus],
    (logoutStatus) => logoutStatus
)