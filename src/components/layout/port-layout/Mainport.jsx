import React, { useEffect } from "react";
import Portcard from "../../blocks/port-blocks/Portcard";
import { Plans, concept, conceptdev, other, videodata } from "../../data/Portdata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import img2 from "../../media/bendy-international-transportation-and-delivery-logistics.gif";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
function Mainport() {
  return (
    <motion.div
      className="col-12 m-0  py-0  mt-lg-5 pt-lg-5 overflow-hidden hello px-0 "
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="container ">
        <motion.img
          src={img2}
          className="position-absolute d-lg-block d-none"
          alt=""
          style={{
            width: "13vw",
            top: "100px",
            left: "7vw",
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: {
              opacity: 0,
              scale: 0,
            },
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.img
          src={img2}
          className="position-absolute d-lg-block d-none"
          alt=""
          style={{
            width: "13vw",
            top: "100px",
            right: "7vw",
          }}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: {
              opacity: 0,
              scale: 0,
            },
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <div className="row m-0 py-0  d-flex align-items-center justify-content-center ">
          <div className="col-lg-10 col-12 text-center">
            <div className="display-2 mb-lg-3 mb-0 text-uppercase fw-bolder d-md-block d-none">
              Studio Articulation <span className="text-orange">Portfolio</span>
            </div>
            <div className="display-3 mb-lg-3 mb-0 text-uppercase fw-bolder d-md-none d-block">
              Studio Articulation <span className="text-orange">Portfolio</span>
            </div>
          </div>
          <div className="col-12">
            <div className="row m-0 mt-5 pt-0">
              <div className="col-12 display-6 text-dark fw-bolder">
                My Work <span className="text-orange"> Videos</span>
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
                My Work <span className="text-orange"> Plans</span>
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
                        <Portcard data={data} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-4">
                Spatial Relationship
                <span className="text-orange"> Diagram</span>
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
                        <Portcard data={data} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-12 display-6 text-dark fw-bolder my-lg-4">
                Concept Development<span className="text-orange"> Diagram</span>
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
                        <Portcard data={data} />
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
                        <Portcard data={data} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Mainport;
