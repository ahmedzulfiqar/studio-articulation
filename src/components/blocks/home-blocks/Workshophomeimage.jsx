import { motion } from "framer-motion";
import React from "react";
function Workshophomeimage({svg}) {
  return (
    <motion.div
      className="col-lg-5 px-lg-4 col-12  px-lg-0 px-3   d-flex align-self-center justify-content-lg-start mt-lg-0 mt-5  justify-content-center"
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: -10 },
        hidden: {
          opacity: 0,
          y: -100,
        },
      }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {svg}
    </motion.div>
  );
}

export default Workshophomeimage;
