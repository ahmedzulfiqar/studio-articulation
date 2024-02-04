import { motion } from "framer-motion";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

function Portcard({ data }) {
  const [load, setLoad] = useState(true);

  return (
    <motion.div className="card p-0 my-2 shadow-sm overflow-hidden border border-4 rounded-3 Portcard">
      <img
        src={data.img}
        alt=""
        className="img-fluid h-100"
        loading="lazy"
        onLoad={() => setLoad(false)}
      />
      {load && (
        <motion.div
          className="coverlay bg-black w-100"
          style={{ height: "40vh" }}
        >
          <img
            src="https://cdn.dribbble.com/users/255512/screenshots/2215917/animation.gif"
            alt=""
            className="img-fluid"
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Portcard;
