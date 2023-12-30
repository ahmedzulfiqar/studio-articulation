import React from "react";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Svg2 from "../../utilities/Svg2";
import Abouthomeetext from "../../blocks/home-blocks/Abouthomeetext";
function Abouthome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 vh-100 "
      style={{ scrollSnapAlign: "center" }}
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Mainhomeimage svg={<Svg2 />} />
          <Abouthomeetext />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-between">
          <Mainhomeimage svg={<Svg2 />} />
          <Abouthomeetext />
        </div>
      </div>
    </div>
  );
}

export default Abouthome;
