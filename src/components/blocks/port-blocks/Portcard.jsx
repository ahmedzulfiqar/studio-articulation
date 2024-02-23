import { motion } from "framer-motion";
import React, { useState } from "react";

function Portcard({ data, setshowModal }) {
  return (
    <>
      <motion.div
        className="card p-0 my-2 shadow-sm overflow-hidden border border-4 rounded-3"
        onClick={(e) => setshowModal({ ...e, val: true, img: data.img })}
      >
        <img src={data.img} alt="" className="img-fluid h-100" />
      </motion.div>
    </>
  );
}

export default Portcard;
