import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addComentarioxObjeto = createAsyncThunk(
    "objeto/addComentarioxObjeto",
    async (formData: object, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}comentario/add`, {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let data: any = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)