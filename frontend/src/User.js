import {React,  useEffect,  useState } from "react";
import axios from 'axios';
import './User.css';

export  const Problem = () => {
    const[x,sx]=useState([]);
    useEffect(()=>
      {
        axios.get("http://localhost:8000/pso/")
        .then( (result)=>
          {
            sx(result.data);
          })
      })
      
        return(
            <>
                <div>
                 {
            
                x.map((data)=>
                (
                    <>
                    <div className="container-1">
                    {data.Title}<br/>
                    {data.Post}<br/>
                    </div>
                    </>
                ))
                 }
                </div>
              


               
            </>
        )
}