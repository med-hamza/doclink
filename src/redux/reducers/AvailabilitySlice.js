import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAvailabilty = createAsyncThunk('available/fetchAvailabilty', async () => {
    try {
        const response = await axios.get('https://my-json-server.typicode.com/med-hamza/searchdata/availability')
        return response.data

    }
    catch (error) {
        console.log(error)
    }
})
export const fetchAvailabiltyByid = createAsyncThunk('available/fetchAvailabiltyByid', async (id) => {
    try {
        const response = await axios.get(`https://my-json-server.typicode.com/med-hamza/searchdata/availability/${id}`)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
})
export const availableSlice = createSlice({
    name: 'available',
    initialState: { availitemData: null, availableData: null, loading: false, error: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAvailabilty.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAvailabilty.fulfilled, (state, action) => {
                state.loading = false
                state.availableData = action.payload
            })
            .addCase(fetchAvailabilty.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(fetchAvailabiltyByid.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAvailabiltyByid.fulfilled, (state, action) => {
                state.loading = false
                state.availitemData = action.payload
            })
            .addCase(fetchAvailabiltyByid.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }

})

export default availableSlice.reducer