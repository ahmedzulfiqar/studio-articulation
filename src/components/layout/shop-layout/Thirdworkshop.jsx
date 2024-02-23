import React from "react";
import Svg7 from "../../media/undraw_My_personal_files_re_3q0p.png";
import Svg6 from "../../media/undraw_Complete_design_re_h75h.png";
import Svg8 from "../../media/undraw_Collaborating_re_l43g.png";
import { motion } from "framer-motion";
function Thirdworkshop() {
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-5 overflow-hidden home px-0 "
      style={{ scrollSnapAlign: "center", minHeight: "100vh" }}
    >
      <div className="container h-100">
        <div className="row m-0 py-0 h-100 d-flex  align-items-center justify-content-between ">
          <motion.div
            className="col-lg-12 col-12 text-center  textx p-0"
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
            <div className="text-orange text-uppercase   fw-bolder display-5 mb-lg-5 mb-2 d-xxl-block d-none">
              Who is this Course for?
            </div>{" "}
            <div className="text-orange text-uppercase fw-bolder display-6 mb-lg-4 mb-3 d-xxl-none d-block">
              Who is this Course for?
            </div>
            <div className="row m-0 justify-content-evenly pb-5 pt-3">
              <div className="col-lg-4 col-12 py-lg-0 py-2">
                <div className="card rounded-4 overflow-hidden  border-0 shadow-sm">
                  <img src={Svg6} alt="" className="img-fluid" />
                  <div className="fs-3 px-2 py-3 fw-bolder">
                    Aspiring Freelance Designers
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 py-lg-0 py-2">
                <div className="card rounded-4 overflow-hidden  border-0 shadow-sm">
                  <img src={Svg7} alt="" className="img-fluid w-100" />
                  <div className="fs-3 px-2 py-3 fw-bolder">
                  Architects & Interior Designers
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 align-self-center py-lg-0 py-2">
                <div className="card rounded-4 overflow-hidden  border-0 shadow-sm">
                  <img src={Svg8} alt="" className="img-fluid" />
                  <div className="fs-3 px-2 py-3 fw-bolder">
                  Design Students
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-xxl-1 pt-xxl-2">
              <a
                className="btn btn-xxl bg-orange text-light px-4 border-0 fw-bolder py-xxl-3 py-2 shadow-sm"
                href="https://www.fyiarch.com/pfd?fbclid=PAAaZGYWr-OR2U_iap6GquWRY2bVjuT4mw323JbpHuhtDO_tnjTovr85tP83s_aem_AdS2AIAs4vbikyElsDSO2HF39-nLymhQxgmaVtgfdbHTHuT1VdteI23F14aeMGaCT5w"
              >
                Book Your Seat
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Thirdworkshop;
