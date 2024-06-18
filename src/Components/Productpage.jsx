import React from "react";
import { useSelector } from "react-redux";


const Productpage=()=>{

const isloading= useSelector(state=>state.mockAPIReducer.isLoading)
const stateValue=useSelector(state=>state.mockAPIReducer.value)
console.log(isloading,stateValue)
    return(
        <div>
<h1>Product page</h1>
{isloading?
stateValue.map((item,index)=>{
    
    return(
        <>
        <div key={index}>
            <h3>name:{item.name}</h3>
            <h3>gmail:{item.gmail}</h3>


        </div>
        
        </>
    )
})
:"loading..."}

        </div>
    )
}

export default Productpage