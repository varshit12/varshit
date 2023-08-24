import React, { useState } from 'react';
import axios from 'axios'; 
import './Login.css';

const Login = () => {
  // const nav=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Forgot=() =>{
    window.location.href="/password"
         }
  const Submit=async() =>{
    try{
     const result = await axios.post("https://server-l7gb.onrender.com/login/"+email+'/'+password);
     console.log(result.data)
        if(result.data)
        {
            alert("Successfully logged in");
            window.location.href="/User"
          
        }
        else{
            alert("USER NOT FOUND");
            window.location.href="/signup"
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
          <h1>Login</h1>
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
            <button onClick={Submit}>LOGIN</button><br/>
            <button onClick={Forgot}>ForgetPassword</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
