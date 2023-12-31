import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
function RouterFiles() {
  const [classe, setclasse] = useState("");
  return (
    <div className="col-12 p-0">
      <Header classe={classe} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home setclasse={setclasse} />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default RouterFiles;
