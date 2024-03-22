

import { createSlice } from "@reduxjs/toolkit";
// import products from "./products.json";

function findIndex(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) return i;
    }

    return -1;
}
// create a SLice
const CreateSlice = createSlice({
    name: "opReducer", //slice name
    initialState: [],   //initial state
    reducers: {        //reducer function to update the state
        saveAllBlogs: (state, action) => {
            return action.payload;
        },
        removeFromCart(state, action) {
            const { id } = action.payload;

            return state.filter((item) => item.id !== id);
        },
        increaseQuantity(state, action) {
            const { id } = action.payload;

            const index = findIndex(state, id);

            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    quantity: (state[index].quantity || 1) + 1,
                };
            }
        },
        decreaseQuantity(state, action) {
            const { id } = action.payload;
            const index = findIndex(state, id);

            if (index !== -1 && state[index].quantity > 1) {
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity - 1
                };
            }
        }
    }
});

// Export actions and reducer from the slice

export const { removeFromCart, increaseQuantity, decreaseQuantity, saveAllBlogs } =
    CreateSlice.actions;

export default CreateSlice.reducer;
