import { createAction, createSlice } from "@reduxjs/toolkit";
import { listObjetos } from "./actions/listObjetos";
interface ObjetoState {
    ListObjetos?: any[];
    ObjetosStatus?: string;
}

const initialState = {
    ListObjetos: [],
    ObjetosStatus: "",
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
            });
    }
});

export default objetoSlice.reducer;