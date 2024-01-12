import React, { useEffect, useRef, useState } from "react";
import Mainhome from "../layout/home-layout/Mainhome";
import Abouthome from "../layout/home-layout/Abouthome";
import Workshophome from "../layout/home-layout/Workshophome";
import Porthome from "../layout/home-layout/Porthome";
import Footerhome from "../layout/home-layout/Footerhome";
import Testemonials from "../layout/home-layout/Testemonials";
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
      <Porthome />
      <Workshophome /> <Testemonials />
      <Footerhome />
    </div>
  );
}

export default Home;
