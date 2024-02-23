import React, { useEffect, useRef, useState } from "react";
import Portcard from "../../blocks/port-blocks/Portcard";
import {
  Plans,
  concept,
  conceptdev,
  other,
  videodata,
} from "../../data/Portdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Navigation, Autoplay } from "swiper/modules";
function Mainport() {
  const [showModal, setshowModal] = useState({ val: false, img: "" });
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setshowModal({ val: false, img: "" });
      }
    }

    // Add event listener when the modal is shown
    if (showModal.val) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when the modal is hidden or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <motion.div
      className="col-12 m-0  py-0  mt-lg-5 pt-lg-5 overflow-hidden hello px-0 "
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="container ">
        <div className="row m-0 py-0  d-flex align-items-center justify-content-center ">
          <div className="col-lg-10 col-12 text-center">
            <div className="display-2 mb-lg-3 mb-0 text-uppercase fw-bolder d-xxl-block d-none">
              Studio Articulation <span className="text-purple">Portfolio</span>
            </div>
            <div className="display-4 mb-lg-3 mb-0 text-uppercase fw-bolder d-xxl-none d-block">
              Studio Articulation <span className="text-purple">Portfolio</span>
            </div>
          </div>
          <div className="col-12">
            <div className="row m-0 mt-5 pt-0">
              <div className="col-12 display-6 text-dark fw-bolder">
                My Work <span className="text-purple"> Videos</span>
              </div>
              <div className="col-12">
                <Swiper
                  className="my-lg-4 my-4 "
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  navigation={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {videodata.map((data) => {
                    return (
                      <SwiperSlide>
                        <video
                          src={data.vid}
                          controls
                          className="img-fluid  rounded-4 border border-light border-5"
                        ></video>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-4">
                My Work <span className="text-purple"> Plans</span>
              </div>
              <div className="col-lg-12 col-12 p-0">
                <Swiper
                  className="my-lg-4 my-4 "
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {Plans.map((data) => {
                    return (
                      <SwiperSlide>
                        <Portcard data={data} setshowModal={setshowModal} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-4">
                Spatial Relationship
                <span className="text-purple"> Diagram</span>
              </div>
              <div className="col-lg-12 col-12 p-0">
                <Swiper
                  className="my-lg-4 my-4 "
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {concept.map((data) => {
                    return (
                      <SwiperSlide>
                        <Portcard data={data} setshowModal={setshowModal} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-4">
                Concept Development<span className="text-purple"> Diagram</span>
              </div>
              <div className="col-lg-12 col-12 p-0">
                <Swiper
                  className="my-lg-4 my-4 "
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {conceptdev.map((data) => {
                    return (
                      <SwiperSlide>
                        <Portcard data={data} setshowModal={setshowModal} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-2">
                <span className="text-BLACK"> OTHER</span>
              </div>
              <div className="col-lg-12 col-12 p-0">
                <Swiper
                  className="my-lg-4 my-4 "
                  loop={true}
                  modules={[Navigation, Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {other.map((data) => {
                    return (
                      <SwiperSlide>
                        <Portcard data={data} setshowModal={setshowModal} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal.val && (
        <motion.div
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Animation to make it visible
          transition={{ duration: 0.3 }} // Animation duration
          className="sdsds-wrapper  overflow-hidden"
          style={{
            position: "fixed",
            top: 0,
            left: "0px",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }} // Initial scale (optional)
            animate={{ opacity: 1, y: 0 }} // Animation to make it visible
            transition={{ duration: 0.5 }} // Animation duration
            ref={modalRef}
            className="dssadw overflow-hidden"
          >
            <img
              src={showModal.img}
              alt=""
              className="img-fluid"
              style={{ maxWidth: "80vw", maxHeight: "80vh" }}
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
export default Mainport;
