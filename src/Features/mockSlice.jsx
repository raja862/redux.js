import {createSlice} from "@reduxjs/toolkit";


 
const mockSlice= createSlice({
    name:"mock",
    initialState:{value:[],isLoasding:false},
    reducers:{
        loading:(state,action)=>{       ///state = initialvalue action=dispatch
        state.isLoasding=true
        },
        fetchData:(state,action)=>{
            state.value=action.payload
            state.isLoasding=true

        }
    }
})

export const {loading,fetchData}=mockSlice.actions  //////usedispatch()
export default mockSlice.reducer;