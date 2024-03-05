import React, { useState } from "react";
import Svg1 from "../utilities/Svg1";
import { motion } from "framer-motion";
import Mainhomeimage from "../blocks/home-blocks/Mainhomeimage";
import Footerhome from "../layout/home-layout/Footerhome";
import { Link } from "react-router-dom";
import Svg6 from "../utilities/Svg6";

function Contact() {
  return (
    <>
      <div className="col-12 p-0 vh-100  m-0 home" id="mainhome">
        <div className="container h-100 d-lg-block d-none ">
          <div className="row m-0 h-100  justify-content-between">
            <motion.div
              className="col-lg-5 col-12 p-0 rounded-4 overflow-hidden align-self-center"
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
              <Svg6 />
            </motion.div>
            <motion.div
              className="col-lg-6 justify-content-center mt-lg-5  col-12 p-0 align-self-center d-flex align-items-center text-lg-start text-center"
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
              <div className="p-0 w-100">
                <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
                  Contact
                  <span className="text-red"> us </span>
                </div>
                <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
                  Contact
                  <span className="text-red"> us </span>
                </div>
                <div className="ms-lg-3 fs-3">
                  <span className="fw-bolder text-red">Email Us At : </span>
                  <br />
                  <a
                    href="https://mail.google.com/mail/u/0/#search/Joinstudioarticulation%40gmail.com"
                    target="_blank"
                    className="text-dark small"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Joinstudioarticulation@gmail.com
                  </a>
                </div>
                <div className="ms-lg-3 fs-3 mt-4">
                  <span className="fw-bolder text-red">Visit Us At : </span>
                </div>
                <section class="py-2  text-start">
                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://in.pinterest.com/rathoreritu91111/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-pinterest-p"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.behance.net/ritikarathore"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-behance"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://studioarticulation.gumroad.com/
          "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <img
                      src="https://th.bing.com/th/id/R.9172416bd8ef8c7e15b041f659756b3f?rik=dcySiNBpYXVnJQ&pid=ImgRaw&r=0"
                      alt=""
                      className="img-fluid"
                      style={{ width: "60px" }}
                    />
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.instagram.com/studio_articulation/?hl=en
          "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://in.linkedin.com/in/ar-ritika-rathore-b5908a1a5 "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="container d-lg-none d-block ">
          <div className="row m-0 h-100 justify-content-between">
            <motion.div
              className="col-lg-5 col-12 p-0 rounded-4 overflow-hidden align-self-center"
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
              <Svg6 />
            </motion.div>
            <motion.div
              className="col-lg-6 justify-content-center mt-lg-5  col-12 p-0 align-self-center d-flex align-items-center text-lg-start text-center"
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
              <div className="p-0 w-100">
                <div className="display-2 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
                  Contact 
                  <span className="text-red"> us </span>
                </div>
                <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block text-uppercase">
                  Contact
                  <span className="text-red"> us </span>
                </div>

                <div className="ms-lg-3 small">
                  <span className="fw-bolder text-red">Email Us At : </span>
                  <br />
                  <a
                    href="https://mail.google.com/mail/u/0/#search/Joinstudioarticulation%40gmail.com"
                    target="_blank"
                    className="text-dark small"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Joinstudioarticulation@gmail.com
                  </a>
                </div>
                <div className="ms-lg-3 small mt-4">
                  <span className="fw-bolder text-red">Visit Us At : </span>
                </div>
                <section class="py-2  text-center">
                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://in.pinterest.com/rathoreritu91111/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-pinterest-p"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.behance.net/ritikarathore"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-behance"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://studioarticulation.gumroad.com/
          "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <img
                      src="https://th.bing.com/th/id/R.9172416bd8ef8c7e15b041f659756b3f?rik=dcySiNBpYXVnJQ&pid=ImgRaw&r=0"
                      alt=""
                      className="img-fluid"
                      style={{ width: "60px" }}
                    />
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://www.instagram.com/studio_articulation/?hl=en
          "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    class="btn btn-link btn-floating btn-lg text-body m-1"
                    href="https://in.linkedin.com/in/ar-ritika-rathore-b5908a1a5 "
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
        <Footerhome />
      </div>
    </>
  );
}

export default Contact;
