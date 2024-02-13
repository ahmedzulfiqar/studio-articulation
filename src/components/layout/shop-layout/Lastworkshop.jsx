import React, { useEffect, useState } from "react";
import Svg7 from "../../media/undraw_My_personal_files_re_3q0p.png";
import Svg6 from "../../media/undraw_Complete_design_re_h75h.png";
import Svg8 from "../../media/undraw_Collaborating_re_l43g.png";
import { motion } from "framer-motion";
function Lastworkshop() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-02-22T20:30:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
        <span key={interval} className="fs-3 d-block p-3 mx-2 border-red my-lg-0 my-3 rounded-3 fw-bolder">
          {timeLeft[interval]}
          <br /> {interval}
        </span>
    );
  });
  return (
    <div
      className="col-12 m-0  py-0  mt-lg-5 mb-lg-0 mb-3 overflow-hidden  px-0 "
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
            <div className="text-red text-uppercase   fw-bolder display-2 mb-lg-2 mb-2 d-xxl-block d-none">
              Portfolio Workshop
            </div>{" "}
            <div className="text-red text-uppercase   fw-bolder fs-3 mb-lg-2 mb-0 d-xxl-none d-block">
              Portfolio Workshop
            </div>{" "}
            
            <div className="div py-lg-5 py-3 text-center border-0  d-xl-flex justify-content-center">
              {timerComponents}
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

export default Lastworkshop;
