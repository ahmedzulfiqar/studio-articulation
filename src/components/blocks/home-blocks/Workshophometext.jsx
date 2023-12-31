import { motion } from "framer-motion";
import React from "react";
function Workshophometext() {
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
        <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
          Our <span className="text-blue"> Workshops</span>
        </div>
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
          Our <span className="text-blue"> Workshops</span>
        </div>{" "}
        <div class="card border-0 shadow-sm my-4">
          <div class="card-header border-0">WORKSHOP</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                INTERACTIVE ADOBE ILLUSTRATOR WORKSHOP FOR CONCEPT DEVELOPMENT
                DIAGRAMS
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="ps-lg-1 pt-lg-2">
          <div className="btn btn-lg d-md-inline-block d-none   text-light  bg-blue  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
          <div className="btn btn-lg d-md-none d-inline-block  text-light  bg-blue  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Workshophometext;
