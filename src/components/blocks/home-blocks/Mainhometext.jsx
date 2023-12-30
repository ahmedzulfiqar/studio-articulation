import React from "react";
import Button from "../../atoms/root-atoms/Button";
import { motion } from "framer-motion";
function Mainhometext() {
  return (
    <motion.div
      className="col-lg-6 justify-content-center  ps-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-center"
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
        <div className="btn fs-5 mb-lg-4 mb-3 border-red  rounded-4 text-dark bg-secondary py-2 px-lg-4 px-2 bg-opacity-10  d-lg-inline-block d-none">
          Creativity <span className="t ">Starts </span>Here
        </div>
        <div className="btn fs-6 mb-lg-4 mb-3 border-red  rounded-4 text-dark bg-secondary py-1 px-lg-4 px-2 bg-opacity-10  d-lg-none d-lg-inline-block">
          Creativity <span className="t  ">Starts </span>Here
        </div>
        <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
          <span className="text-red">Architectural</span> Graphics And
          <span className="text-red"> Visualisation </span>
        </div>
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
          <span className="text-red">Architectural</span> Graphics And
          <span className="text-red"> Visualisation </span>
        </div>
        <div className="ps-lg-1 pt-lg-2">
          <div className="btn btn-lg mainbtn px-4 border-0 fw-bolder py-lg-3 py-2 shadow-sm">
            Portfolio
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Mainhometext;
