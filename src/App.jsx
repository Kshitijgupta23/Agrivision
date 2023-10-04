import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;