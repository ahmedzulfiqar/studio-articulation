import React from "react";
import Serviceshome from "../layout/shop-layout/Serviceshome";
import { motion } from "framer-motion";
import img1 from "../media/portfoliomedia/3.jpg";
import img2 from "../media/portfoliomedia/4.jpg";
import img3 from "../media/portfoliomedia/5.jpg";
import img4 from "../media/portfoliomedia/6.png";
import img5 from "../media/portfoliomedia/7.png";
import img6 from "../media/portfoliomedia/8.jpg";
import img7 from "../media/portfoliomedia/9.jpg";
import img8 from "../media/portfoliomedia/10.png";
import img9 from "../media/portfoliomedia/11.png";
import img10 from "../media/portfoliomedia/12.png";
import img11 from "../media/portfoliomedia/13.png";
import img12 from "../media/portfoliomedia/14.png";
import img13 from "../media/portfoliomedia/15.jpg";
import Footerhome from "../layout/home-layout/Footerhome";
function Service({ scrollRef }) {
  return (
    <div className="row   mt-5  pt-lg-5 overflow-x-hidden mx-0 position-relative homer ps-lg-0 ps-2">
      <Serviceshome />
      <div
        className="col-12 m-0  py-0  mt-lg-5 pt-lg-5  home px-0 "
      >
        <div className="container h-100">
          <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-center ">
            <motion.div
              className="col-lg-12 col-12 text-center  p-0"
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
              <div className="text-orange text-uppercase fw-bolder display-5 mb-lg-4 mb-2 d-xxl-none d-block">
                Our Services
              </div>
              <div className="display-6 mb-5 fw-bolder text-dark  d-xxl-block d-none">
                Introducing Our Services TO help you{" "}
                <span className="text-red">
                  <br /> ILLUSTRATE Architecture
                </span>
              </div>
              <div className="fs-5 mb-4 fw-bolder text-dark   d-xxl-none d-block">
                Introducing Our Services TO help you
                <span className="text-red"> ILLUSTRATE Architecture</span>
              </div>
            </motion.div>
            <div className="col-12">
              <div className="row m-0">
                <div className="col-lg-3 col-md-6 col-12 py-3 ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img1} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      PLans
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12  py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img2} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Sections
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3   ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img3} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Elevations
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img4} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Site Zoning
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 py-3 ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img5} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Site Analysis
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12  py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img6} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Exploded Views
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3   ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img7} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Interior Isometric
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img8} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Spatial Zoning
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3 ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img9} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Form Development
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12  py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img10} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Bubble Diagram
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3   ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img11} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Conceptual Zoning
                    </div>
                  </div>
                </div>{" "}
                <div className="col-lg-3 col-md-6 col-12 py-3  ">
                  <div className="card rounded-2 border-0 text-center">
                    <img src={img12} alt="" className="img-fluid" />
                    <div className="fs-4  fw-bolder pt-2 text-uppercase">
                      Supporting Diagrams
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
