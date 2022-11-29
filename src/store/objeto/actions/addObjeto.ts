import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addObjeto = createAsyncThunk(
    "objeto/addObjeto",
    async (formData: object, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}objeto/add`, {
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