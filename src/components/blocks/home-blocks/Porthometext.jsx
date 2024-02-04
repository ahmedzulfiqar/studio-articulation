import { motion } from "framer-motion";
import React from "react";
import logo from "../../media/adobe-illustrator.png";
import { Link } from "react-router-dom";
function Porthometext() {
  return (
    <div
      className="col-lg-6 justify-content-center  ps-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-start"
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
        <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-xxl-block d-none">
          Our <span className="text-orange"> Portfolio</span>
        </div>
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-xxl-none d-block text-uppercase">
          Our <span className="text-orange"> Portfolio</span>
        </div>{" "}
        <div class="card border-0  shadow-sm my-4 ">
          <div class="card-header border-0 text-orange d-lg-block d-none text-uppercase">
            Portfolio
          </div>
          <div class="card-body ">
            <blockquote class="blockquote m-0  ">
              <p className="text-uppercase fw-bolder fs-5 text-dark">
                Visit My Portfolio
              </p>
              <p className="small text-muted opacity-75 d-xxl-block d-none">
                Driven by a deep understanding of the built environment and a
                keen eye for detail, I utilize digital tools to create impactful
                the power of creativity to solve problems and spark new ideas.
                My work is driven by a desire to explore the possibilities of
                design and to create images that are both beautiful and
                meaningful.
              </p>
              <p className="small fs-6 text-muted small opacity-75 d-xxl-none d-block">
                riven by a deep understanding of the built environment and a
                keen eye for detail, I utilize digital tools to create impactful
                the power of creativity to solve problems and spark new ideas.
              </p>
            </blockquote>
          </div>
        </div>
        <Link className="ps-lg-1 pt-lg-2" to="/portfolio">
          <div className="btn btn-lg d-md-inline-block d-none   text-light  bg-orange  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
          <div className="btn btn-lg d-md-none d-inline-block  text-light  bg-orange  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Porthometext;
