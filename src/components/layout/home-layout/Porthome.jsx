import React from "react";
import Svg5 from "../../utilities/Svg5";
import Porthometext from "../../blocks/home-blocks/Porthometext";
import Porthomeimage from "../../blocks/home-blocks/Porthomeimage";
function Porthome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 min-vh-75 home"
      id="porthome"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Porthometext />
          <Porthomeimage svg={<Svg5 />} />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-between">
          <Porthometext />
          <Porthomeimage svg={<Svg5 />} />
        </div>
      </div>
    </div>
  );
}

export default Porthome;
