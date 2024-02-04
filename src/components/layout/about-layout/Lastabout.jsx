import React from "react";
import person from "../../media/unnamed.jpg";
import { motion } from "framer-motion";
import Svg6 from "../../media/blah5.png";
function Lastabout() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-0 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100  py-0">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between">
          <div
            className="col-lg-5 col-12 p-0   rounded-4 overflow-hidden order-lg-1 order-1"
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
            <img src={Svg6} className="img-fluid" alt="" />
          </div>{" "}
          <div
            className="col-lg-6 col-12 text-lg-start textx p-0 order-lg-0 order-0"
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
            Studio Articulation
            </div>{" "}
            <div className="text-red text-uppercase fw-bolder display-5 mb-lg-4 mb-2 d-xxl-none d-block">
            Studio Articulation
            </div>
            <div className="display-6 mb-4 fw-bolder text-dark text-uppercase d-xxl-block d-none">
              Where Creativity and Meaning Converge
            </div>{" "}
            <div className="fs-6 mb-2 fw-bolder text-dark text-uppercase  d-xxl-none d-block">
              Where Creativity and Meaning Converge
            </div>
            <p className="fs-5 mx-auto  mb-4 text-secondary opacity- fw-lighter d-lg-block d-none">
              <span className="text-red">
                <i class="fa fa-quote-left pe-2 fs-3" aria-hidden="true"></i>
              </span>
              At the forefront of Studio Articulation, Ritika’s focus goes
              beyond merging creativity and meaning; she’s committed to
              perpetual exploration. Refusing to let architectural creativity
              stagnate, she consistently delves into the boundless possibilities
              of design—ensuring that the essence of architecture remains
              ever-vibrant and evolving.
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
              At the forefront of Studio Articulation, Ritika’s focus goes
              beyond merging creativity and meaning; she’s committed to
              perpetual exploration. Refusing to let architectural creativity
              stagnate, she consistently delves into the boundless possibilities
              of design—ensuring that the essence of architecture remains
              ever-vibrant and evolving.
              <span className="text-red">
                <i
                  class="fa fa-quote-right pe-2 fs-6"
                  style={{ transform: "rotateX(180deg)" }}
                  aria-hidden="true"
                ></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastabout;
