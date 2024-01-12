import React from "react";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Abouthomeimage from "../../blocks/home-blocks/Abouthomeimage";
import Svg2 from "../../utilities/Svg2";
import Abouthomeetext from "../../blocks/home-blocks/Abouthomeetext";
import img2 from "../../media/bubble-gum-purple-gear-1.gif";
import { motion } from "framer-motion";
function Abouthome({ scrollRef }) {
  return (
    <div
      className="col-12 p-0 mt-lg-5 pt-lg-0 pt-4 min-vh-75  home"
      id="abouthome"
      data-cursor-color="#927abb"
      style={{
        scrollSnapAlign: "start",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <motion.img
        src={img2}
        className="position-absolute d-lg-block d-none"
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
      />
      <motion.img
        src={img2}
        className="position-absolute d-lg-block d-none"
        alt=""
        style={{
          width: "8vw",
          marginTop: "8%",
          right: "7vw",
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
      />
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
