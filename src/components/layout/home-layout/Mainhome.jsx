import React from "react";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Svg1 from "../../utilities/Svg1";
function Mainhome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 vh-100 "
      style={{ scrollSnapAlign: "center" }}
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Mainhometext />
          <Mainhomeimage svg={<Svg1 />} />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-between">
          <Mainhometext />
          <Mainhomeimage svg={<Svg1 />} />
        </div>
      </div>
    </div>
  );
}

export default Mainhome;
