import React from "react";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";

function Mainhome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 mt-5 "
      style={{
        height: "80vh",
      }}
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100">
          <Mainhomeimage />
          <Mainhometext />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100">
          <Mainhomeimage />
          <Mainhometext />
        </div>
      </div>
    </div>
  );
}

export default Mainhome;
