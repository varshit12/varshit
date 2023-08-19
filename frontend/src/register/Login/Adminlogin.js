import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Adminlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit=async() =>{
    try{
     const result = await axios.post("https://server-l7gb.onrender.com/"+email+'/'+password);
     console.log(result.data)
        if(result.data)
        {
            alert("Successfully logged in");
            window.location.href="/createpost"
          
        }
        else{
            alert("USER NOT FOUND");
            
        }
    }
    catch(e)
    {
     console.log(e);
    }
    
 }


  const handleSubmit = (e) => {
    e.preventDefault(e);
    // You can perform login validation here
    console.log('Login clicked');
  };

  return (
    <div className="App">
      <section>
        <div className="login-box">
          <h1>Admin Login</h1>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <button onClick={Submit}>LOGIN</button>
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default Adminlogin;
