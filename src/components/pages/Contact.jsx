import React, { useState } from "react";
import Svg1 from "../utilities/Svg1";
import { motion } from "framer-motion";
import Mainhomeimage from "../blocks/home-blocks/Mainhomeimage";
import Footerhome from "../layout/home-layout/Footerhome";
import { Link } from "react-router-dom";
import Svg6 from "../utilities/Svg6";

function Contact() {
  return (
    <div
      className="col-12 p-0 vh-100 border m-0 home"
      data-cursor-color="#e97ab4"
      id="mainhome"
    >
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0 h-100  justify-content-between">
          <motion.div
            className="col-lg-5 col-12 p-0 rounded-4 overflow-hidden align-self-center"
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: {
                opacity: 0,
                y: -100,
              },
            }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Svg6 />
          </motion.div>
          <motion.div
            className="col-lg-6 justify-content-center mt-lg-5  col-12 p-0 align-self-center d-flex align-items-center text-lg-start text-center"
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: {
                opacity: 0,
                x: -100,
              },
            }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="p-0 w-100">
              <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
                Want To <span className="text-red">Work</span> With
                <span className="text-red"> us </span>
              </div>
              <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
                <span className="text-red">Architectural</span> Graphics And
                <span className="text-red"> Visualisation </span>studio
              </div>
              <div className="ms-lg-3 fs-3">
                <span className="fw-bolder text-red">Email Us At : </span>
                <br />
                Joinstudioarticulation@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0 h-100 justify-content-between">
          <motion.div
            className="col-lg-5 col-12 p-0 rounded-4 overflow-hidden align-self-center"
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: {
                opacity: 0,
                y: -100,
              },
            }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Svg6 />
          </motion.div>
          <motion.div
            className="col-lg-6 justify-content-center mt-lg-5  col-12 p-0 align-self-center d-flex align-items-center text-lg-start text-center"
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: {
                opacity: 0,
                x: -100,
              },
            }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="p-0 w-100">
              <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
                Want To <span className="text-red">Work</span> With
                <span className="text-red"> us </span>
              </div>
              <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
              Want To <span className="text-red">Work</span> With
                <span className="text-red"> us </span>
              </div>
              <div className="ms-lg-3 small">
                <span className="fw-bolder text-red">Email Us At : </span>
                <br />
                Joinstudioarticulation@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
