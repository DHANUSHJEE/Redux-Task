import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CreateSlice";


// Configure the Redux store

export default configureStore({
    reducer: {
        //we have added the reducer
        opReducer: myReducer,
    },
});