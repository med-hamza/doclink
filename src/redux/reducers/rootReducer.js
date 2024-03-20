import { combineReducers } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
    list: listSlice,
    category: categorySlice,
    search: searchSlice

})
export default rootReducer