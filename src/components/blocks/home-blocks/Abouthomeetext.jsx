import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
function Abouthomeetext() {
  return (
    <motion.div className="col-lg-6  justify-content-center  ps-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-center">
      <div className="p-0 w-100">
        <div className="display-5  ms-lg-1 mb-lg-4 mb-3 fw-bolder d-xxl-block d-none">
          <span className="text-red text-uppercase display-4 fw-bolder">
            Ritika Rathore
          </span>
        </div>
        <div className="display-6   ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-xxl-none d-block text-uppercase">
          <span className="text-red text-uppercase display-5 fw-bolder">
            {" "}
            Ritika Rathore
          </span>
        </div>
        <p className="ps-1 fs-5 text-black  opacity-75">
          I'm Ritika Rathore, an architect and illustrator passionate about
          impactful design. With a degree in architecture, I translate visions
          into compelling narratives, reflecting a passion for design that goes
          beyond aesthetics. In my creative journey, I wish to empower aspiring
          creatives through workshops and daily inspiration through my Instagram
          community.
        </p>

      </div>
    </motion.div>
  );
}

export default Abouthomeetext;
