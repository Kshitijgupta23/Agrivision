import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [user,setUser] = useState({
    name: "", email: "", password: ""
  });
  
  const handleRegister = async () => {
  };

  return (
    <div className="container1">
    <h2>Welcome {user.name}!</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        value={user.name}
        onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, [e.target.name]:e.target.value})}
      />

      <div className='btn_container'>
        <Link to="/"><button onClick={handleRegister}>Register</button></Link>
      </div>
      
    </div>
  );
};

export default Register;
