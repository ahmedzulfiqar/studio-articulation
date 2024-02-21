import { motion } from "framer-motion";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

function Portcard({ data }) {
  const [load, setLoad] = useState(true);
  const [opener, setopener] = useState(false);

  return (
    <>
      {" "}
      {opener && (
        <div
          className=" top-0 left-0 vw-100 vh-100 bg-black "
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1000",
          }}
        >
          a
        </div>
      )}
      <motion.div
        className="card p-0 my-2 shadow-sm overflow-hidden border border-4 rounded-3 "
        onClick={() => setopener(true)}
      >
        <img
          src={data.img}
          alt=""
          className="img-fluid h-100"
          onLoad={() => setLoad(false)}
        />
        {load && (
          <motion.div className="coverlay bg-black w-100">
            <img
              src="https://cdn.dribbble.com/users/255512/screenshots/2215917/animation.gif"
              alt=""
              className="img-fluid"
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Portcard;
