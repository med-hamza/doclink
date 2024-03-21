import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchDoctor = createAsyncThunk('search/fetchDoctors', async ({ category, name }) => {
    try {
        let url = 'https://my-json-server.typicode.com/med-hamza/doctordata/doctors?';
        if (category) {
            url += `category=${category}`
        }
        if (name) {
            url += `name=${name}`
        }
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
})


export const searchSlice = createSlice({
    name: 'search',
    initialState: { searchdata: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchDoctor.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchDoctor.fulfilled, (state, action) => {
                state.loading = false;
                state.searchdata = action.payload;
            })
            .addCase(searchDoctor.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default searchSlice.reducer