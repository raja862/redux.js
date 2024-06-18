import React from "react";

import { loading,fetchData } from "../Features/mockSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ProductUpdate=()=>{
const dispatch=useDispatch();
const [data, setData]=useState([])
const URL='https://jsonplaceholder.typicode.com/users'

useEffect(()=>{
    mockfetchData();

},[])

const mockfetchData=async()=>{
await axios .get(URL).then(res=>setData(res.data)).catch((error)=>{console.log(error)})
}
    return(
        <div>
<h1>product update</h1>
<button onClick={()=>{dispatch(fetchData(data))}}>fatchData</button>
        </div>
    )
}


export default ProductUpdate;