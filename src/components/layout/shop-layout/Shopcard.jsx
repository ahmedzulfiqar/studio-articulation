import React, { useState } from "react";
import { motion } from "framer-motion";

function Shopcard({ data }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="col-xl-3 col-lg-4 col-sm-6 col-12 py-lg-4 py-3 px-lg-3 px-3 overflow-visible bg-transparent shopcard align-self-end"
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: {
          opacity: 0,
          y: 10,
        },
      }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <a href={data.link} target="_blank">
        <div
          className="card p-0 border-light border-3 shadow-sm rounded-2 overflow-hidden "
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.img
            src={data.images[0]}
            alt=""
            className="img-fluid"
            initial={{ opacity: 1, visibility: "visible" }}
            animate={{
              opacity: hovered ? 0 : 1,
              visibility: hovered ? "hidden" : "visible",
            }}
            transition={{ duration: 0.5 }}
            style={{
              width: hovered ? 0 : "100%",
              height: hovered ? 0 : "auto",
            }}
          />
          <motion.img
            src={data.images[1]}
            alt=""
            className="img-fluid"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{
              opacity: hovered ? 1 : 0,
              visibility: hovered ? "visible" : "hidden",
            }}
            transition={{ duration: 0.5 }}
            style={{
              width: hovered ? "100%" : 0,
              height: hovered ? "auto" : 0,
            }}
          />
          <div className="card-body px-2 ">
            <div className="row m-0 w-100 ">
              <h5 className="card-title  col-10 p-0 text-start small fw-bold text-dark text-uppercase">
                {data.name}
              </h5>
              <div className="btn align-self-start col-2 text-center p-0  text-blue  fw-bolder">
                {data.price !== "$0" ? data.price : "Free"}
              </div>
              <div className="col-12 px-0 mt-1 pb-0" style={{ height: "20px" }}>
                <ul className="list-unstyled p-0 d-flex justify-content-start ">
                  <li>
                    <i className="fas fa-star fa-sm text-warning me-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-warning me-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-warning me-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-warning me-1"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm text-warning"></i>
                  </li>
                  <li className="ps-2 align-self-center small text-muted">
                    (4.5)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default Shopcard;
