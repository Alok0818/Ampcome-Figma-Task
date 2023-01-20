import { useState } from "react";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import Appointments from "./Components/Appointments/Appointments";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointments />} />
      </Routes>
    </div>
  );
}

export default App;
