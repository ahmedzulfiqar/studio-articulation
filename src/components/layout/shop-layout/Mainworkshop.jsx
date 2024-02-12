import React from "react";
import person from "../../media/unnamed-min.jpg";
import { motion } from "framer-motion";
function Mainworkshop() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-5 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100">
        <div className="row m-0 py-0 h-100 d-flex align-items-center justify-content-between ">
          <motion.div
            className="col-lg-6 col-12 text-lg-start textx p-0"
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
            <div className="text-red text-uppercase fw-bolder display-3 mb-lg-4 mb-2 d-xxl-block d-none">
              Workshop
            </div>{" "}
            <div className="text-red text-uppercase fw-bolder display-5 mb-lg-4 mb-2 d-xxl-none d-block">
              Workshop
            </div>
            <div className="display-6 mb-4 fw-bolder text-dark  d-xxl-block d-none">
              Learn how to create a Killer Portfolio with us
            </div>
            <div className="fs-6 mb-3 fw-bolder text-dark   d-xxl-none d-block">
              Learn how to create a Killer Portfolio with us
            </div>
            <div className="display-6 mb-4 fw-bolder text-red  d-xxl-block d-none">
              And land your Dream Job
            </div>{" "}
            <div className="fs-6 mb-3 fw-bolder text-red   d-xxl-none d-block">
              And land your Dream Job
            </div>
            <div className="ps-xxl-1 pt-xxl-2">
              <a
                className="btn btn-xxl mainbtn px-4 border-0 fw-bolder py-xxl-3 py-2 shadow-sm"
                href="https://www.fyiarch.com/pfd?fbclid=PAAaZGYWr-OR2U_iap6GquWRY2bVjuT4mw323JbpHuhtDO_tnjTovr85tP83s_aem_AdS2AIAs4vbikyElsDSO2HF39-nLymhQxgmaVtgfdbHTHuT1VdteI23F14aeMGaCT5w"
              >
                Book Your Seat
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-5 col-12 p-0   overflow-hidden"
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
            <img
              src={
                "https://static.wixstatic.com/media/de3556_df1a7bb5926d4ff390d1dda0823c20d1~mv2.jpg/v1/crop/x_675,y_0,w_10602,h_10736/fill/w_350,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/exploded%20axonometric%20house.jpg"
              }
              alt=""
              className="img-fluid border-red border-5 my-lg-0 my-5 rounded-4 w-100"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mainworkshop;
