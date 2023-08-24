import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

export const Signup = () => {
    const [firstname,setFirstname]=useState();
    const [lastname,setLastname]=useState();
    const [dob,setDob]=useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const Submit=async() =>{
       try{
        const result = await axios.post("https://server-l7gb.onrender.com/signup/"+firstname+'/'+lastname+'/'+dob+'/'+email+'/'+password+'/'+mobileNumber);
        console.log(result)
           if(result.data)
           {
               alert("Successfully signed up ");
               window.location.href="/"
           }
           else{
               alert("try again");
           }
       }
       catch(e)
       {
        console.log(e);
       }
       
    }

  return (
    <div className="App">
      <section>
        <div className="signup-box">
          <h1>Sign Up</h1>
          <div className="user-box">
              <input
                required
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label>FirstName</label>
            </div>
            <div className="user-box">
              <input
                required
                type="text"
                onChange={(e) => setLastname(e.target.value)}
              />
              <label>LastName</label>
            </div>
            <div className="user-box">
              <input
                required
                type="email"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                type="password"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
            <label>Date of Birth</label><br />
              <input
                required
                type="date"
                // value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              
            </div>
            <div className="user-box">
            <input
                required
                type="number"
                // value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                      
            />
            <label>MobileNumber</label>
            </div>
            


            <button  onClick={Submit}>Sign Up</button>
        </div>
      </section>
    </div>
  )
};


