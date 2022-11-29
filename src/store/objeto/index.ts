import { createAction, createSlice } from "@reduxjs/toolkit";
import { listObjetos } from "./actions/listObjetos";
import { addObjeto } from "./actions/addObjeto";
import { addComentarioxObjeto } from "./actions/addComentarioxObjeto";
interface ObjetoState {
    ListObjetos?: any[];
    ObjetosStatus?: string;
    AddObjetoStatus?: string;
    AddComentarioStatus?: string;
}

const initialState = {
    ListObjetos: [],
    ObjetosStatus: "",
    AddObjetoStatus: "",
    AddComentarioStatus: "",
} as ObjetoState;

export const initObjetoState = createAction("INIT_OBJETOS_TATE");

const objetoSlice = createSlice({
    name: "objeto",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initObjetoState, (state) => {
                state.ListObjetos = [];
                state.ObjetosStatus = "";
                state.AddObjetoStatus = "";
            })
            .addCase(listObjetos.pending, (state) => {
                state.ObjetosStatus = "pending";
            })
            .addCase(listObjetos.fulfilled, (state, { payload }) => {
                state.ObjetosStatus = "fulfilled";
                state.ListObjetos = payload;
            })
            .addCase(listObjetos.rejected, (state, action) => {
                state.ObjetosStatus = "rejected";
            })
            .addCase(addObjeto.pending, (state) => {
                state.AddObjetoStatus = "pending";
            })
            .addCase(addObjeto.fulfilled, (state, { payload }) => {
                state.AddObjetoStatus = "fulfilled";
            })
            .addCase(addObjeto.rejected, (state, action) => {
                state.AddObjetoStatus = "rejected";
            })
            .addCase(addComentarioxObjeto.pending, (state) => {
                state.AddComentarioStatus = "pending";
            })
            .addCase(addComentarioxObjeto.fulfilled, (state, { payload }) => {
                state.AddComentarioStatus = "fulfilled";
            })
            .addCase(addComentarioxObjeto.rejected, (state, action) => {
                state.AddComentarioStatus = "rejected";
            });
    }
});

export default objetoSlice.reducer;