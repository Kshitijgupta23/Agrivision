import { useState} from 'react';
import "./LoginBox.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();

    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login Successful");
      navigate("/dashboard");
    }
  };

  return (
      <div className="login_box">
         <h1>Welcome Back!</h1>
         <form METHOD="POST" className='form'>
            <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="********"
                name="password"
                id="password"
                value={password}
                onChange={(e => setPassword(e.target.value))} 
            />
            <div className='btn_container'>
            <button className="btn" onClick={handleLogin}>Login</button>
            <Link to="/register"><button className='btn'>Register</button></Link>
          </div>
        </form>
        
      </div>
  )
}

export default Login;


/*
If const [user,setUser] = useState({
  a: ,b: then add name filed = a,b in input and
  onChange={(e) => setUser({...user,[e.target.name]: e.target.value})}
})

If states declared separately like
  const [user,setUser]= useState("")
  const [name,setName]= useState("")
  then onChange=({e} => setUser(e.target.value))
*/