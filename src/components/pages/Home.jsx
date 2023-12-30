import React from "react";
import Mainhome from "../layout/home-layout/Mainhome";
import Abouthome from "../layout/home-layout/Abouthome";

function Home() {
  return (
    <div
      className="row vh-100 overflow-y-scroll overflow-x-hidden mx-0 home"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <Mainhome />
      <Abouthome />
      <Mainhome />
    </div>
  );
}

export default Home;
