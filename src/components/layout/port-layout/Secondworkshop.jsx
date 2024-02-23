import React from "react";
import Svg6 from "../../media/blah1.png";
import { motion } from "framer-motion";
function Secondworkshop() {
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
            <div className="text-orange text-uppercase fw-bolder display-5 mb-lg-5 mb-2 d-xxl-block d-none">
              Why Learn with us?
            </div>{" "}
            <div className="text-orange text-uppercase fw-bolder display-6 mb-lg-4 mb-3 d-xxl-none d-block">
              Why Learn with us?
            </div>
            <div className="fs-5 mb-4 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You're a skilled designer but you do not know how to create a
              killer portfolio
            </div>
            <div className="mb-3 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You're a skilled designer but you do not know how to create a
              killer portfolio
            </div>
            <div className="fs-5 mb-4 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Enhancing your design portfolio is a top priority.
            </div>
            <div className="mb-3 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Enhancing your design portfolio is a top priority.
            </div>{" "}
            <div className="fs-5 mb-4 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Your focus is on upskilling, particularly in creating a standout
              portfolio.
            </div>
            <div className="mb-3 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Your focus is on upskilling, particularly in creating a standout
              portfolio.
            </div>
            <div className="fs-5 mb-4 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You aim to diversify your portfolio but face challenges with sheet
              layouts.
            </div>
            <div className="mb-3 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You aim to diversify your portfolio but face challenges with sheet
              layouts.
            </div>
            <div className="fs-5 mb-4 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Your ultimate objective is to land on your Dream Job with your
              Portfolio.
            </div>
            <div className="mb-3 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              Your ultimate objective is to land on your Dream Job with your
              Portfolio.
            </div>{" "}
            <div className="fs-5 mb-5 fw-bolder text-dark  d-xxl-flex d-none">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You regularly refine your portfolio as you advance.
            </div>
            <div className="mb-4 fw-bolder text-dark   small d-xxl-none d-">
              <i
                class="fa fa-check text-green fs-2 pe-3 align-self-center"
                aria-hidden="true"
              ></i>{" "}
              You regularly refine your portfolio as you advance.
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
              src={Svg6}
              alt=""
              className="img-fluid d-md-block d-none"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Secondworkshop;
