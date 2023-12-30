import React from "react";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Abouthomeimage from "../../blocks/home-blocks/Abouthomeimage";
import Svg2 from "../../utilities/Svg2";
import Abouthomeetext from "../../blocks/home-blocks/Abouthomeetext";
function Abouthome({ scrollRef }) {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 vh-100 home"
      id="abouthome"
      style={{
        scrollSnapAlign: "center",
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/000/543/813/original/white-abstract-background-vector.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Abouthomeimage svg={<Svg2 />} />
          <Abouthomeetext scrollRef={scrollRef} />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 justify-content-center align-items-start flex-sm-row">
          <Abouthomeetext />
          <Abouthomeimage svg={<Svg2 />} />
        </div>
      </div>
    </div>
  );
}

export default Abouthome;
