import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
function Abouthomeetext() {
  return (
    <motion.div className="col-lg-6  justify-content-center  pe-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-center">
      <div className="p-0 w-100">
        <div className="display-5  ms-lg-1 mb-lg-4 mb-3 fw-bolder d-xxl-block d-none">
          <span className="text-dark text-uppercase display-4 fw-bolder">
            About <span className="text-red">Creator</span>
          </span>
        </div>
        <div className="display-6   ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-xxl-none d-block text-uppercase">
          <span className="text-dark text-uppercase display-5 fw-bolder">
            {" "}
            About <span className="text-red">Creator</span>
          </span>
        </div>
        <div class="card border-0  shadow-sm my-4 ">
          <div class="card-header fw-normal border-0 text-red d-lg-block d-none text-uppercase">
          Ritika <span className="text-red">Rathore</span>
          </div>
          <div class="card-body ">
            <blockquote class="blockquote m-0  ">
              <p className="text-uppercase fw-bolder fs-5 text-dark">
              Ritika Rathore
              </p>
              <p className="small text-muted opacity-75 d-xxl-block d-none">
                I'm Ritika Rathore, an architect and illustrator passionate
                about impactful design. With a degree in architecture, I
                translate visions into compelling narratives, reflecting a
                passion for design that goes beyond aesthetics. In my creative
                journey, I wish to empower aspiring creatives through workshops
                and daily inspiration through my Instagram community.
              </p>
              <p className="small fs-6 text-muted small opacity-75 d-xxl-none d-block">
                I'm Ritika Rathore, an architect and illustrator passionate
                about impactful design. With a degree in architecture, I
                translate visions into compelling narratives, reflecting a
                passion for design that goes beyond aesthetics. In my creative
                journey, I wish to empower aspiring creatives through workshops
                and daily inspiration through my Instagram community.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Abouthomeetext;
