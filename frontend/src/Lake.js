import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
const Lakes= () =>
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
        <h3>Fertilizers and pesticides from agricultural and urban runoff and sewage seepage from the groundwater enter lakes and cause elevated levels of nitrates and phosphates.</h3>
        <div className="image1"></div>
        </>

    )
}
export default Lakes;