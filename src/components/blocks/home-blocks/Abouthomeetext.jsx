import { motion } from "framer-motion";
import React from "react";

function Abouthomeetext() {
  return (
    <motion.div
      className="col-lg-6  justify-content-center  ps-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-center"
    >
      <div className="p-0 w-100">
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
          About Me <br />
          <span className="text-purple text-uppercase display-4 fw-bolder">
            Ritika Rathore
          </span>
        </div>
        <div className="display-6 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
          About Me <br />
          <span className="text-purple text-uppercase display-5 fw-bolder">
            {" "}
            Ritika Rathore
          </span>
        </div>
        <p className="ps-1  text-black opacity-75">
          Driven by a deep understanding of the built environment and a keen eye
          for detail,
          <span className="d-lg-inline d-none">
            I utilize digital tools to create impactful architectural
            illustrations and concepts that translate visions into compelling
            narratives.
          </span>
        </p>
        <p className="ps-1 d-lg-block d-none text-black opacity-75">
          With a background in Urban Design from the University of Westminster,
          I'm well-versed in the complexities of the design process. My
          experience working with clients has given me a deep appreciation for
          the importance of clear communication and collaboration. I'm a firm
          believer in the power of creativity to solve problems and spark new
          ideas. My work is driven by a desire to explore the possibilities of
          design and to create images that are both beautiful and meaningful.
        </p>
        <div className="ps-lg-1 pt-lg-2">
          <div className="btn btn-lg d-md-inline-block d-none   text-light  bg-purple  border-0 fw-bolder shadow-sm">
            About Me
          </div>
          <div className="btn btn-lg d-md-none d-inline-block  text-light  bg-purple  border-0 fw-bolder shadow-sm">
            About Me
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Abouthomeetext;
