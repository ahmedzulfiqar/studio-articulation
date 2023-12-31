import React from "react";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Svg1 from "../../utilities/Svg1";
import Workshophomeimage from "../../blocks/home-blocks/Workshophomeimage";
import Workshophometext from "../../blocks/home-blocks/Workshophometext";
import Svg3 from "../../utilities/Svg3";

function Workshophome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 vh-100 home"
      style={{ scrollSnapAlign: "center" }}
      id="workshophome"
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Workshophometext />
          <Workshophomeimage svg={<Svg3 />} />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-between">
          <Workshophometext />
          <Workshophomeimage svg={<Svg3 />} />
        </div>
      </div>
    </div>
  );
}

export default Workshophome;
