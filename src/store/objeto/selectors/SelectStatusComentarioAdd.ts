import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectStatusComentarioAdd = createSelector(
    [(store: RootState) => store.objeto.AddComentarioStatus],
    (AddComentarioStatus) => AddComentarioStatus
)