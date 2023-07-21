import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
const Home = () =>
{
    const nav=useNavigate();
    const Submit1=() =>
    {
        nav('/');
    }
    const Submit2=() =>
    {
        nav('/Road');
    }
    const Submit3=() =>
    {
        nav('/Lakes');
    }
    return(
    <>
        <button onClick={Submit1}>Home</button> 
        <button onClick={Submit2}>Road</button> 
        <button onClick={Submit3}>Lakes</button>


   </>
    )
}
export default Home;