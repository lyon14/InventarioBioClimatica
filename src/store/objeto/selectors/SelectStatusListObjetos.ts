import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectStatusList = createSelector(
    [(store: RootState) => store.objeto.ObjetosStatus],
    (ObjetosStatus) => ObjetosStatus
)