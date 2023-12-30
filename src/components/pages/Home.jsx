import React, { useEffect, useRef, useState } from "react";
import Mainhome from "../layout/home-layout/Mainhome";
import Abouthome from "../layout/home-layout/Abouthome";
import Workshophome from "../layout/home-layout/Workshophome";

function Home({ setclasse }) {
  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.getElementById("mainhome");
      const aboutSection = document.getElementById("abouthome");
      const workshopSection = document.getElementById("workshophome");
      const container = document.getElementById("scroll-container");
      const scrollPosition = container.scrollTop;

      if (
        scrollPosition >= mainSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setclasse("rednav");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < workshopSection.offsetTop
      ) {
        setclasse("purplenav");
      } else if (scrollPosition >= workshopSection.offsetTop) {
        setclasse("bluenav");
      }
    };

    const container = document.getElementById("scroll-container");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="row vh-100 overflow-y-scroll overflow-x-hidden mx-0 home"
      style={{
        scrollSnapType: "y proximity",
        scrollBehavior: "smooth",
      }}
      id="scroll-container"
    >
      <Mainhome />
      <Abouthome />
      <Workshophome />
    </div>
  );
}

export default Home;
