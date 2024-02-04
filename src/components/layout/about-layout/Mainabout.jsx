import React from "react";
import person from "../../media/unnamed.jpg";
import { motion } from "framer-motion";
function Mainabout() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-5 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between ">
          <motion.div
            className="col-lg-6 col-12 text-lg-start textx p-0"
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
            <div className="text-red text-uppercase fw-bolder display-3 mb-lg-4 mb-2 d-xxl-block d-none">
              Ritika Rathore
            </div>{" "}
            <div className="text-red text-uppercase fw-bolder display-5 mb-lg-4 mb-2 d-xxl-none d-block">
              Ritika Rathore
            </div>
            <div className="display-6 mb-4 fw-bolder text-dark text-uppercase d-xxl-block d-none">
              Architectural Visionary and Illustrator
            </div>{" "}
            <div className="fs-6 mb-3 fw-bolder text-dark text-uppercase  d-xxl-none d-block">
              Architectural Visionary and Illustrator
            </div>
            <p className="fs-5 mx-auto  mb-4 text-secondary opacity- fw-lighter d-lg-block d-none">
              <span className="text-red">
                <i class="fa fa-quote-left pe-2 fs-3" aria-hidden="true"></i>
              </span>
              Driven by a profound understanding of the built environment and
              acute attention to detail, Ritika Rathore utilizes digital tools
              to craft impactful architectural illustrations. Her work
              seamlessly translates visions into compelling narratives,
              reflecting a passion for design that goes beyond aesthetics. She
              truly is an architecture rebel with a rendering revolution mindset{" "}
              <span className="text-red">
                <i
                  class="fa fa-quote-right pe-2 fs-3"
                  style={{ transform: "rotateX(180deg)" }}
                  aria-hidden="true"
                ></i>
              </span>
            </p>
            <p className="small mb-4 text-secondary opacity- fw-lighter d-lg-none d-block">
              <span className="text-red">
                <i class="fa fa-quote-left pe-2 fs-6" aria-hidden="true"></i>
              </span>
              Driven by a profound understanding of the built environment and
              acute attention to detail, Ritika Rathore utilizes digital tools
              to craft impactful architectural illustrations. Her work
              seamlessly translates visions into compelling narratives,
              reflecting a passion for design that goes beyond aesthetics. She
              truly is an architecture rebel with a rendering revolution mindset{" "}
              <span className="text-red">
                <i
                  class="fa fa-quote-right pe-2 fs-6"
                  style={{ transform: "rotateX(180deg)" }}
                  aria-hidden="true"
                ></i>
              </span>
            </p>
          </motion.div>
          <motion.div
            className="col-lg-5 col-12 p-0 border-red border-5  rounded-4 overflow-hidden"
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
            <img src={person} alt="" className="img-fluid" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mainabout;
