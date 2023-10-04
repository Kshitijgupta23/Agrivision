import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Form.css"

const Form = () => {
  const [user, setUser] = useState({
    email: "", password: ""
  });

  const handleLogin = async () => {
  };

  return (
    <div className="container1">
      <h2>Login!</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={user.username}
        onChange={(e) => setUser({...user,[e.target.name]: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} 
      />

      <div className='btn_container'>
        <button onClick={handleLogin}>Login</button>
        <Link to="/register"><button>Register</button></Link>
      </div>
      
    </div>
  );
};

export default Form;

/* 
const [user, setUser] = useState({
    username: "", password: ""
  });
  then onChange={(e) => setUser({...user, [e.target.name]: e.target.value})} , provide name filed=name given in defining state

  If states declared separately like:
  const [username,setUsername]= useState('')
  then onChange={(e) => setUser(e.target.value)}
*/
