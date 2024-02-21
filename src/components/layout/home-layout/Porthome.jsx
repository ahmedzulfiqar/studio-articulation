import React from "react";
import Svg5 from "../../utilities/Svg5";
import Porthometext from "../../blocks/home-blocks/Porthometext";
import Porthomeimage from "../../blocks/home-blocks/Porthomeimage";
import { motion } from "framer-motion";
import img2 from "../../media/bendy-international-transportation-and-delivery-logistics.gif";
function Porthome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 min-vh-75 home"
      id="porthome"
      style={{ scrollSnapAlign: "start" }}
    >
      {/*    <motion.img
        src={img2}
        className="position-absolute d-xxl-block d-none"
        alt=""
        style={{
          width: "10vw",
          marginTop: "8%",
          left: "6vw",
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
        className="position-absolute d-xxl-block d-none"
        alt=""
        style={{
          width: "10vw",
          marginTop: "43%",
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
      />*/}
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
