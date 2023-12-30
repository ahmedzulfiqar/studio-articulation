import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
function RouterFiles() {
  const [classe, setclasse] = useState('')
  return (
    <div className="col-12 p-0">
      <Header classe={classe}/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home setclasse={setclasse}/>} />
      </Routes>
    </div>
  );
}

export default RouterFiles;
