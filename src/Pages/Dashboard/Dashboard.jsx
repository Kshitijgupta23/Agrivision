import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DashCSS from './Dashboard.module.css';

const Dashboard = () => {

  const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  const callDashboard = async () =>{
    try{
      const res = await fetch('/dashboard',{
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          credentials: "include"
      })

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
      }

    }catch(err){
      console.log(err);
      navigate("/");
    }
  }

  useEffect(() =>{
    callDashboard();
  },[]);

  return (
    <div className={DashCSS.container}>
        <form method="GET" className={DashCSS.form}>
          <h1>Hello {userData.name}!</h1>
        </form>
    </div>
  );
}

export default Dashboard;