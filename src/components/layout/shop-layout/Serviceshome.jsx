import React from "react";
import person from "../../media/website-04.png";
import { motion } from "framer-motion";
function Serviceshome() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-0 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "75vh" }}
    >
      <div className="container h-100">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between ">
          <motion.div
            className="col-lg-5 col-12 text-lg-start text-center p-0"
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
            {" "}
            <div className="text-orange text-uppercase fw-bolder display-3 mb-lg-4 mb-2 d-xxl-block d-none">
              Our Services
            </div>{" "}
            <div className="text-orange text-uppercase fw-bolder display-3 mb-lg-5 mb-2 d-xxl-none d-block">
              Our Services
            </div>
            <div className="display-6 mb-4 fw-bolder text-dark  d-xxl-block d-none">
              Introducing Our Services TO help you{" "}
              <span className="text-red"> ILLUSTRATE Architecture</span>
            </div>
            <div className="fs-2 mb-4 fw-bolder text-dark   d-xxl-none d-block">
              Introducing Our Services TO help you
              <span className="text-red"> ILLUSTRATE Architecture</span>
            </div>
            <div className="ps-xxl-1 pt-xxl-2">
              <a
                className="btn btn-xxl bg-orange text-light px-4 border-0 fw-bolder py-xxl-3 py-2 shadow-sm"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-5 col-12 p-0   overflow-hidden"
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
            <img
              src={person}
              alt=""
              className="img-fluid border-0 - my-lg-0 my-5 rounded-4 w-100"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Serviceshome;
