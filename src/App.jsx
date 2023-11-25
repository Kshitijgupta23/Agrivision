import React, { createContext, useReducer } from 'react';
import { Routes, Route} from "react-router-dom";
import { Login, Register, Dashboard, Error, Navbar, Logout} from "./Pages"
import {reducer, initialState} from "./reducer/UseReducer";

export const UserContext = createContext(); // Context API

const Routing = () =>{
  return(
    <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />
    </Routes>
  )
}

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState);
  return (
      <div>
        <UserContext.Provider value={{state,dispatch}}>
          <Navbar />
          <Routing />
        </UserContext.Provider>
      </div>
  );
}

export default App;