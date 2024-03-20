import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchList = createAsyncThunk('list/fetchList', async () => {

    const response = await axios.get('https://my-json-server.typicode.com/med-hamza/doctordata/doctors')
    const data = response.data
    return data
})

export const fetchListByid = createAsyncThunk('listbyid/fetchListByid', async (id) => {
    const response = await axios.get(`https://my-json-server.typicode.com/med-hamza/doctordata/doctors/${id}`)
    const data = response.data
    return data

})

export const listSlice = createSlice({
    name: 'list',
    initialState: { listdata: null, itemData: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                state.loading = false
                state.listdata = action.payload
            })
            .addCase(fetchList.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(fetchListByid.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchListByid.fulfilled, (state, action) => {
                state.loading = false
                state.itemData = action.payload
            })
            .addCase(fetchListByid.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default listSlice.reducer