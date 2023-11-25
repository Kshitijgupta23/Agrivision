import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import "./RegisterBox.css";

const Register = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    name: "", email: "", password: ""
  });
  
  const handleRegister = async (e) => {
    e.preventDefault();

    const {name, email, password} = user;

    const res = await fetch('/register',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid registration");
    }else{
      window.alert("Registration successfull");
      navigate("/");
    }
  };

  return (
    <div className="register_box">
      <h1 id="register_heading">Hello {user.name}!</h1>
      <form method="POST" className='form'>
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
          required
        />
      
      <button className="btn" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
