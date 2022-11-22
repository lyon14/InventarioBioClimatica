import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const selectListObjetos = createSelector(
    [(store: RootState) => store.objeto.ListObjetos],
    (ListObjetos) => ListObjetos
);