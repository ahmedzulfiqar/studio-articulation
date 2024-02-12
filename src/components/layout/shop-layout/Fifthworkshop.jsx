import React from "react";
import Svg7 from "../../media/undraw_My_personal_files_re_3q0p.png";
import Svg6 from "../../media/undraw_Complete_design_re_h75h.png";
import Svg8 from "../../media/undraw_Collaborating_re_l43g.png";
import { motion } from "framer-motion";
function Fifthworkshop() {
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
            <div className="text-red text-uppercase   fw-bolder fs-2 mb-lg-2 mb-2 d-xxl-block d-none">
            Learn to create sheet composition like this
            </div>{" "}
            <img
              src="https://static.wixstatic.com/media/de3556_59af17e2b7c6460a898cb980e704f9cd~mv2.png/v1/fill/w_1897,h_872,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/de3556_59af17e2b7c6460a898cb980e704f9cd~mv2.png"
              alt=""
              className="img-fluid my-5"
            />
            <div className="ps-xxl-1 pt-xxl-2">
              <a
                className="btn btn-xxl mainbtn px-4 border-0 fw-bolder py-xxl-3 py-2 shadow-sm"
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

export default Fifthworkshop;
