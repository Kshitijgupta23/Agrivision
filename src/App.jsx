import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Login, Register, Dashboard, Error, Navbar, Logout} from "./Pages"

const App = () => {
  return (
        <div>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
          </Routes>
        </div>
  );
}

export default App;