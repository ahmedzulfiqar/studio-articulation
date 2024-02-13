import React from "react";
import Svg7 from "../../media/undraw_My_personal_files_re_3q0p.png";
import Svg6 from "../../media/undraw_Complete_design_re_h75h.png";
import Svg8 from "../../media/undraw_Collaborating_re_l43g.png";
import { motion } from "framer-motion";
function Sixthworkshop() {
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
            <div className="text-red text-uppercase   fw-bolder display-3 mb-lg-2 mb-2 d-xxl-block d-none">
              Get Free Resources
            </div>{" "}
            <div className="text-red text-uppercase   fw-bolder fs-3 mb-lg-2 mb-2 d-xxl-none d-block">
              Get Free Resources
            </div>{" "}
            <div className="row m-0 my-5">
              <div className="col-lg-4 col-12 py-3">
                <div className="card border-red rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">
                  Textures pack    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 py-3">
                <div className="card border-orange border-2 rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">Portfolio cover designs</div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-red rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">CV layout templates</div>
                </div>
              </div>
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-orange border-2 rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">
                    Fonts Recomendation for presentation
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-red rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder"> Pre composed sheet layouts</div>
                </div>
              </div>
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-orange border-2 rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">Photoshop brushes (ABR)</div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-red rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">
                    Concept development practice files
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-orange border-2 rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">
                    Trees Templates in Plan and elevation
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-12  py-3">
                <div className="card border-red rounded-5 p-lg-4">
                  <div className="fs-3 fw-bolder">
                    Color palettes to enhance visual appeal
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  );
}

export default Sixthworkshop;
