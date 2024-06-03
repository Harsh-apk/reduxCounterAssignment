import { createSlice } from "@reduxjs/toolkit";

export const colors = ["bg-red-400","bg-blue-400","bg-green-400","bg-yellow-400","bg-purple-400","bg-orange-400","bg-amber-400","bg-lime-400","bg-rose-400","bg-white"];

const getRandomColor = ()=>{
    return colors[Math.floor(Math.random() * (colors.length))];
}

const initialState = {
    "count":0,
    "color":getRandomColor(),
}




const CounterSlice = createSlice({
    name:"Counter",
    initialState:initialState,
    reducers:{
        add(state,action){
            
            state.count+=action.payload;
            state.color = getRandomColor();
            //console.log(action.payload)
        },
        subtract(state,action){
            state.count-=action.payload;
            state.color = getRandomColor();
        }
    }

})
export const {add,subtract} = CounterSlice.actions;
export default CounterSlice.reducer;