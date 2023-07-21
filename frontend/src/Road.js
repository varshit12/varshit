import React from "react";
import { useNavigate } from "react-router-dom";
const Road= () =>
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

        <h3>Roads are bad and inadequate in Bhimavaram. There are 34 km long roads per 100 sq. km area in Bhimavaram while in Japan 270 km and in West Germany 167 km long roads per 100 sq. km area are there. Government should spend more on the development of roads.</h3>
        <div className="image"></div>
        </>

    )
}
export default Road;