import { combineReducers } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import AvailabilitySlice from "./AvailabilitySlice";

const rootReducer = combineReducers({
    list: listSlice,
    category: categorySlice,
    search: searchSlice,
    available: AvailabilitySlice

})
export default rootReducer