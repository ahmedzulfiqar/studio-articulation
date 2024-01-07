import React from "react";
import Svg5 from "../../utilities/Svg5";
import Porthometext from "../../blocks/home-blocks/Porthometext";
import Porthomeimage from "../../blocks/home-blocks/Porthomeimage";
import { motion } from "framer-motion";
import img2 from "../../media/outline-online-insurance-services-with-electronic-signature.gif";
import Testemonialstext from "../../blocks/home-blocks/Testemonialstext";
function Testemonials() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 min-vh-75 home"
      id="testimonials"
      style={{ scrollSnapAlign: "start" }}
    >
      <motion.img
        src={img2}
        className="position-absolute d-lg-block d-none"
        alt=""
        style={{
          width: "8vw",
          marginTop: "43%",
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
      <div className="container h-100 d-lg-block d-none p-0">
        <div className="row m-0 h-100   justify-content-center">
          <Testemonialstext />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-center">
          <Testemonialstext />
        </div>
      </div>
    </div>
  );
}

export default Testemonials;
