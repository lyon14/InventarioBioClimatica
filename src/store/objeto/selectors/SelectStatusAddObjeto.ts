import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectStatusAddObjeto = createSelector(
    [(store: RootState) => store.objeto.AddObjetoStatus],
    (AddObjetoStatus) => AddObjetoStatus
)