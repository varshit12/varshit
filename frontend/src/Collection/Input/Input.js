import React , { useState } from 'react';
import axios from 'axios';
export const Input = () =>
{
    const [name,setName]=useState([]);
    const Submit=async() =>
    {
       try{
        const res = await axios.post("http://localhost:8000/input"+name);
        
           if(res.data)
           {
               alert("Successfully stored");
           }
           else{
               alert("try again");
           }
       
       
       
       }catch(e)    
       {
        console.log(e);
       }
       
    }
return(
    <>
        <div className="rupesh">
         <label> Input Your Name<br/> <input type ="text"  onChange={(e) => setName(e.target.value)}/> </label>
            <button onClick = {Submit}>Submit</button>
        </div>
    </>
);

}
