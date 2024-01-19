import React from "react";
import person from "../../media/unnamed.jpg";
import { motion } from "framer-motion";
import Svg6 from "../../media/undraw_Complete_design_re_h75h.png";
function Fifthabout() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-0 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100  py-0">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between">
          <motion.div
            className="col-lg-6 col-12 p-0   rounded-4 overflow-hidden order-lg-1 order-1"
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
          </motion.div>{" "}
          <motion.div
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
            <div className="text-red text-uppercase fw-bolder display-3 mb-lg-4 mb-2">
              Ritika Rathore
            </div>
            <div className="display-6 mb-4 fw-bolder text-dark text-uppercase d-lg-block d-none">
              Empowering the Next Generation of Designers
            </div>{" "}
            <div className="fs-6 mb-2 fw-bolder text-dark text-uppercase  d-lg-none d-block">
              Empowering the Next Generation of Designers
            </div>
            <p className="fs-5 mx-auto  mb-4 text-secondary opacity- fw-lighter d-lg-block d-none">
              <span className="text-red">
                <i class="fa fa-quote-left pe-2 fs-3" aria-hidden="true"></i>
              </span>
              Beyond her work as an architect and an illustrator, Ritika Rathore
              is a dedicated educator. Her passion lies in empowering architects
              and designers. She firmly believes that everyone possesses the
              potential to create compelling visuals to showcase their design
              ideas effectively. To provide the necessary knowledge and
              guidance, she curates diverse workshops, resource packs, and
              delivers daily inspiration and learning via her Instagram
              community, ensuring a continuous stream of support for aspiring
              creatives.
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
              Beyond her work as an architect and an illustrator, Ritika Rathore
              is a dedicated educator. Her passion lies in empowering architects
              and designers. She firmly believes that everyone possesses the
              potential to create compelling visuals to showcase their design
              ideas effectively. To provide the necessary knowledge and
              guidance, she curates diverse workshops, resource packs, and
              delivers daily inspiration and learning via her Instagram
              community, ensuring a continuous stream of support for aspiring
              creatives.
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

export default Fifthabout;
