import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk('categroy/fetchCategory', async () => {

    try {
        const response = await axios.get('https://my-json-server.typicode.com/med-hamza/doctordata/category');
        const data = response.data
        return data
    }
    catch (error) {
        console.log(error)
    }

})

export const categorySlice = createSlice({
    name: 'category',
    initialState: { data: null, loading: false, error: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }

})
export default categorySlice.reducer
