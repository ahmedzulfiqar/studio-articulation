import React from "react";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";

function Mainhome() {
  return (
    <div
      className="col-12 p-0 mt-lg-5 mt-5 "
      style={{
        height: "80vh",
      }}
    >
      <div className="container h-100">
        <div className="row m-0 h-100">
          <Mainhomeimage />
          <Mainhometext />
        </div>
      </div>
    </div>
  );
}

export default Mainhome;
