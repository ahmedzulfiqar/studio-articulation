import React from "react";
import person from "../../media/unnamed.jpg";
import { motion } from "framer-motion";
import Svg6 from "../../media/blah3.png";
function Secondabout() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-0 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100  py-0">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between">
          <motion.div
            className="col-lg-5 col-12 p-0 b rounded-4 overflow-hidden"
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
            <img src={Svg6} className="img-fluid w-100" alt="" />
          </motion.div>
          <motion.div
            className="col-lg-6 col-12 text-lg-start textx p-0 order-lg-1 order-0"
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
              Educational Background in Architecture
            </div>{" "}
            <div className="fs-6 mb-2 fw-bolder text-dark text-uppercase  d-xxl-none d-block">
              Educational Background in Architecture
            </div>
            <p className="fs-5 mx-auto  mb-4 text-secondary opacity- fw-lighter d-lg-block d-none">
              <span className="text-red">
                <i class="fa fa-quote-left pe-2 fs-3" aria-hidden="true"></i>
              </span>
              Ritika Rathore has completed her architectural degree from the
              city of Indore. This academic foundation equips her with a
              comprehensive grasp of the intricacies inherent in the design
              process. Her expertise lies in crafting spaces that harmonize
              functionality and aesthetics while navigating architecture’s
              complexities with a holistic approach.
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
              Ritika Rathore has completed her architectural degree from the
              city of Indore. This academic foundation equips her with a
              comprehensive grasp of the intricacies inherent in the design
              process. Her expertise lies in crafting spaces that harmonize
              functionality and aesthetics while navigating architecture’s
              complexities with a holistic approach.
              <span className="text-red">
                <i
                  class="fa fa-quote-right pe-2 fs-6"
                  style={{ transform: "rotateX(180deg)" }}
                  aria-hidden="true"
                ></i>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Secondabout;
