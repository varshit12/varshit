import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import './Login.css';
const Update=()=>{
    
const [email,setEmail]=useState([]);
const [newpassword,setNewPassword]=useState([])
const [conformPassword,setConformPassword]=useState([])
const Word=async()=>
{
  try
  {
    const isGoal = await axios.post("http://localhost:8000/password/"+email+"/"+newpassword);
  if(isGoal.data)
  {
    console.log(isGoal.data)
    alert("Password Updated")
    window.location.href="/"
    

  }
  else{
    alert("try again")
} }
catch(e)
  {
    console.log(e)
  }
  } 

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // You can perform login validation here
    console.log('Login clicked');
  };

  

return (
    <>
    <div className="App">
      <section>
        <div className="login-box">
          <h1>Updatde your Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                type="password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label>Enter New Password</label>
            </div>
            <div className="user-box">
              <input
                required
                type="password"
                value={conformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
              />
              <label>Conform New Password</label>
            </div>
            <button onClick={Word}>Update</button>
          </form>
        </div>
      </section>
    </div>
    </>
);
}
export default Update;