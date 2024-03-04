import React from "react";
import Mainhomeimage from "../../blocks/home-blocks/Mainhomeimage";
import Mainhometext from "../../blocks/home-blocks/Mainhometext";
import Svg1 from "../../utilities/Svg2";
import { Shopdata } from "../../data/Shopdata";
import Shopcard from "../shop-layout/Shopcard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
function Mainhome() {
  return (
    <div
      className="col-12 p-0 mt-lg-0 pt-lg-0 pt-4 min-vh-75 home "
      data-cursor-color="#e97ab4"
      id="mainhome"
      style={{ scrollSnapAlign: "start" }}
    >
      {/*    <motion.img
        src={img2}
        className="position-absolute d-xxl-block d-none"
        alt=""
        style={{
          width: "8vw",
          top: "200px",
          left: "7vw",
          transform: "rotate(-80deg)",
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
        className="position-absolute d-xxl-block d-none"
        alt=""
        style={{
          width: "8vw",
          bottom: "200px",
          right: "7vw",
          transform: "rotate(-80deg)",
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
      />*/}
      <div className="container h-100 d-lg-block d-none ">
        <div className="row m-0  h-100 justify-content-between">
          <Mainhometext />
          <Mainhomeimage svg={<Svg1 />} />
        </div>
      </div>
      <div className="container d-lg-none d-block ">
        <div className="row m-0  justify-content-between">
          <Mainhometext />
          <Mainhomeimage svg={<Svg1 />} />
        </div>
      </div>
    </div>
  );
}

export default Mainhome;
