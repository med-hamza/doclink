import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchDoctor = createAsyncThunk('search/fetchDoctors', async ({ selectedCategory, name, showAvailableOnly }) => {
    try {
        let url = 'https://my-json-server.typicode.com/med-hamza/doctordata/doctors?';

        if (name) {
            url += `name=${name}`;
        }

        if (selectedCategory) {
            url += `${name ? '&' : ''}category=${selectedCategory}`;
        }

        const response = await axios.get(url);
        const doctors = response.data;
        const availabilityResponse = await axios.get('https://my-json-server.typicode.com/med-hamza/searchdata/availability');
        const availabilityData = availabilityResponse.data;
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        const filteredDoctors = doctors.filter(doctor => {
            const availability = availabilityData.find(item => item.id === doctor.id);
            const todaySchedule = availability ? availability.schedule.find(slot => slot.day === currentDay) : null;
            const startTime = todaySchedule ? todaySchedule.start_time : '';
            const endTime = todaySchedule ? todaySchedule.end_time : '';
            const isAvailable = isTimeInRange(startTime, endTime, currentTime);

            function isTimeInRange(startTime, endTime, currentTime) {
                // Convert time strings to Date objects for accurate comparison
                const startDate = new Date(`2000/01/01 ${startTime}`);
                const endDate = new Date(`2000/01/01 ${endTime}`);
                const currentDate = new Date(`2000/01/01 ${currentTime}`);

                // Check if current time is within the availability window
                return currentDate >= startDate && currentDate <= endDate;
            }

            if (showAvailableOnly) {
                return name || selectedCategory || isAvailable;
            } else {
                return name || selectedCategory;
            }
        });
        console.log(filteredDoctors)
        return filteredDoctors;



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