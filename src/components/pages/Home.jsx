import React, { useEffect, useRef, useState } from "react";
import Mainhome from "../layout/home-layout/Mainhome";
import Abouthome from "../layout/home-layout/Abouthome";
import Workshophome from "../layout/home-layout/Workshophome";
import Porthome from "../layout/home-layout/Porthome";
import Footerhome from "../layout/home-layout/Footerhome";
import Testemonials from "../layout/home-layout/Testemonials";
import { Link } from "react-router-dom";
import Shopcard from "../layout/shop-layout/Shopcard";
import { Shopdata } from "../data/Shopdata";
import Shopcard2 from "../layout/shop-layout/Shopcard2";
function Home({ setclasse }) {
  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.getElementById("mainhome");
      const aboutSection = document.getElementById("abouthome");
      const portSection = document.getElementById("porthome");
      const workshopSection = document.getElementById("workshophome");
      const testimonialsSection = document.getElementById("testimonials");
      const container = document.getElementById("scroll-container");
      const scrollPosition = container.scrollTop;

      if (
        scrollPosition >= mainSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setclasse("rednav");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < portSection.offsetTop
      ) {
        setclasse("purplenav");
      } else if (
        scrollPosition >= portSection.offsetTop &&
        scrollPosition < workshopSection.offsetTop
      ) {
        setclasse("orangenav");
      } else if (
        scrollPosition >= workshopSection.offsetTop &&
        scrollPosition < testimonialsSection.offsetTop
      ) {
        setclasse("bluenav");
      } else if (scrollPosition >= testimonialsSection.offsetTop) {
        setclasse("greennav");
      }
    };

    const container = document.getElementById("scroll-container");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [setclasse]);

  return (
    <div
      className="row vh-100 overflow-y-scroll overflow-x-hidden mx-0 position-relative homer "
      id="scroll-container"
    >
      <Mainhome />
      <Abouthome />
      <div
        className="col-12 d-flex align-items-center justify-content-center p-0 mt-lg-5 pt-lg-0 pt-4 min-vh-75 home bg-main"
        id="abouthome"
        data-cursor-color="#927abb"
        style={{
          scrollSnapAlign: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100  ">
          <div className="row m-0  h-100 w-100">
            <div className="col-md-8 col-12  d-flex align-items-end justify-content-center mb-lg-5 mb-3">
              <div className="display-4 fw-bolder d-lg-block d-none">
                Check Out Our <span className="text-red">Resources</span>
              </div>
              <div className="fs-3 text-center fw-bolder d-lg-none d-block">
                Check Out Our <span className="text-red">Resources</span>
              </div>
            </div>
            <div className="col-4  align-self-end  d-flex justify-content-center mb-lg-5 d-md-block d-none  mb-3">
              <Link className="btn btn-lg bg-red text-light" to="/shop">
                View More{" "}
                <i
                  class="fa fa-arrow-right ps-2"
                  aria-hidden="true"
                  style={{ fontFamily: "auto" }}
                ></i>
              </Link>
            </div>
            <div className="row m-0 p-0" style={{ height: "min-content" }}>
              {Shopdata.slice(0, 8).map((i) => {
                return <Shopcard2 data={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Porthome />
      <Workshophome />
      <Testemonials />
    </div>
  );
}

export default Home;
