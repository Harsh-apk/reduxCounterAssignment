import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice.js"
const CounterStore = configureStore({
    name:"CounterStore",
    reducer:{
        name:CounterReducer
    }
})

export default CounterStore;