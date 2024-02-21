import { motion } from "framer-motion";
import React from "react";
import logo from "../../media/adobe-illustrator.png";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewCard from "../../atoms/about-atoms/ReviewCard";
import { Link } from "react-router-dom";

function Testemonialstext() {
  const rivewaray = [
    {
      name: "Laxmishri",
      text: "The whole workshop was great. I thoroughly enjoyed the way you taught. Would recommend it to my friends and juniors as well.",
    },
    {
      name: "Ashwin Kumar",
      text: "I liked this workshop. Learned about blender process and illustration. THANK YOU for teaching us about colour theory and typefaces.",
    },
    {
      name: "Moe",
      text: "Wonderful presentation. Learned a lot. Would recommend to others as well.",
    },
    {
      name: "Shravani",
      text: "Thank you very much for the informative techniques. It was very helpful. And very clear.",
    },
    {
      name: "Rahama",
      text: "Yes, it was a really great session! Learnt a lot and for someone like me that loves colorful graphics, this was extremely helpful.",
    },
    {
      name: "Simran",
      text: "It was really a great and informative session. Had fun learning from you.",
    },
    {
      name: "Ajith",
      text: "Thank you!!!! The workshop was really helpful. Those who didn’t join clearly missed it.",
    },
    {
      name: "Alex",
      text: "Workshop transformed the way I approach architecture graphics. Her guidance on Adobe PS and Illustrator elevated my design presentations.",
    },
    {
      name: "Mia",
      text: "As a design student, Ritika's workshop was a game-changer. Learning from her not only improved my software skills but also ignited a new level of creativity in my projects. Highly recommended for anyone passionate about architecture graphics and presentation!",
    },
    {
      name: "Sarah",
      text: "I can't thank Ritika enough for her insightful workshop. Her teaching style is not just informative but engaging. Learning Adobe PS and Illustrator under her guidance has been a turning point in my architectural journey.",
    },
    {
      name: "Isha",
      text: "Ritika's approach is not just about tools but about creating stories through design. Truly inspiring!",
    },
    {
      name: "Author",
      text: "I learnt a lot with this workshop as I’ve always wanted to illustrate the way you put posts here on the channel. I learnt how to use photoshop for site and to make it look beautiful. Thanks a lot!",
    },
  ];

  return (
    <motion.div
      className="col-lg-10 justify-content-center  ps-lg-0  col-12 p-0 d-flex align-items-center text-lg-center text-center"
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: {
          opacity: 0,
          scale: 0.6,
        },
      }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="p-0 w-100">
        <div className="display-2  px-5 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-xxl-block d-none">
          What <span className="text-red">People</span> Say About Our{" "}
          <span className="text-red"> Workshop</span>
        </div>
        <div className="display-6 ms-lg-1 mb-xxl-4 mb-3 px-lg-5 fw-bolder d-xxl-none d-block text-uppercase">
          What <span className="text-red">People</span> Say About
          <span className="text-red"> Our Workshop</span>
        </div>
        <Swiper
          className="my-xxl-5 my-lg-2 my-3 pt-lg-5"
          slidesPerView={1}
          spaceBetween={10}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
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
              spaceBetween: 20,
            },
          }}
        >
          {rivewaray.map((data) => {
            return (
              <SwiperSlide>
                <ReviewCard data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Link className="ps-lg-1 pt-lg-2" to="/workshop">
          <div className="btn btn-lg d-md-inline-block d-none   text-light  bg-red  border-0 fw-bolder shadow-sm">
            Workshop
          </div>
          <div className="btn btn-lg d-md-none d-inline-block  text-light  bg-red  border-0 fw-bolder shadow-sm">
            Workshop
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Testemonialstext;
