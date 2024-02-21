import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name:"counter",
    initialState:{
        value :0
    },
    reducers:{
        increment : (state) => {
        state.value += 1
        },
        decrement : (state) => {
            state.value -= 1
        }

    }
})

export const {decrement,increment} = counterslice.actions
export default counterslice.reducer