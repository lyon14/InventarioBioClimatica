import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listObjetos = createAsyncThunk(
    "objeto/list",
    async (data, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}objeto/list`, {
                method: "GET",
            });
            let objetos = await response.json();
            return objetos;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)