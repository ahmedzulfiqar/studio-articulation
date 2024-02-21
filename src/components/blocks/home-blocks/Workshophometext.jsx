import { motion } from "framer-motion";
import React from "react";
import logo from "../../media/adobe-illustrator.png";
import { Link } from "react-router-dom";
function Workshophometext() {
  return (
    <motion.div
      className="col-lg-6 justify-content-center  ps-lg-5  col-12 p-0 d-flex align-items-center text-lg-start text-start"
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: {
          opacity: 0,
          x: 100,
        },
      }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="p-0 w-100">
        <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-xxl-block d-none">
          Our <span className="text-red"> Workshops</span>
        </div>
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-xxl-none d-block text-uppercase">
          Our <span className="text-red"> Workshops</span>
        </div>{" "}
        <div class="card border-0  shadow-sm my-4 ">
          <div class="card-header border-0 text-red d-lg-block d-none">
            WORKSHOP
          </div>
          <div class="card-body ">
            <blockquote class="blockquote m-0  ">
              <p className="text-uppercase fw-bolder fs-5 text-dark">
                Interactive Adobe Illustrator Workshop
              </p>
              <p className="small text-dark opacity-75">
                With a vision to expand and share the knowledge accumulated over
                the years, Studio Articulation offers regular workshops,
                ensuring your creativity never fades away. With our workshops,
                you can master the art of architectural illustrations.
              </p>
              <footer class="blockquote-footer mt-1  d-lg-block d-none">
                By <cite title="Source Title ">Studio Articulation</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <Link className="ps-lg-1 pt-lg-2" to="/workshop">
          <div className="btn btn-lg d-md-inline-block d-none   text-light  bg-red  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
          <div className="btn btn-lg d-md-none d-inline-block  text-light  bg-red  border-0 fw-bolder shadow-sm">
            Learn More
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Workshophometext;
