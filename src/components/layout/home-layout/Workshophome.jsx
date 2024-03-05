import React from "react";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Svg1 from "../../utilities/Svg1";
import Workshophomeimage from "../../blocks/home-blocks/Workshophomeimage";
import Workshophometext from "../../blocks/home-blocks/Workshophometext";
import Svg3 from "../../utilities/Svg3";
import { motion } from "framer-motion";
import img2 from "../../media/blueberry-blue-pencil.png";
import img1 from "../../media/blueberry-huge-folder-with-files.png";
function Workshophome() {
  return (
    <div
      className="col-12 p-0 mt-lg-5 pt-lg-0 pt-4 min-vh-75  home overflow-hidden "
      style={{
        scrollSnapAlign: "start",
        backgroundSize: "cover",
      }}
      id="workshophome"
    >
      {/*  <motion.img
        src={img2}
        className="position-absolute d-xxl-block d-none"
        alt=""
        style={{
          width: "8vw",
          marginTop: "40%",
          left: "7vw",
        }}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: {
            opacity: 0,
            scale: 0,
          },
        }}
        transition={{ duration: 1, delay: 0.8 }}
      />*/}

      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <Workshophometext />
          <Workshophomeimage svg={<Svg3 />} />
        </div>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center h-100">
        <div className="row m-0">
          <div className="col-12 text-center position-relative z-3 ">
            <Workshophometext />
          </div>
          <div className="col-12 text-center position-relative z-0">
            <Workshophomeimage svg={<Svg3 />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshophome;
