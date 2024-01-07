import React from "react";
import Mainabout from "../layout/about-layout/Mainabout";
import Secondabout from "../layout/about-layout/Secondabout";
import Thirdabout from "../layout/about-layout/Thirdabout";
import Forthlayout from "../layout/about-layout/Forthlayout";
import Fifthabout from "../layout/about-layout/Fifthabout";
import Lastabout from "../layout/about-layout/Lastabout";

function About() {
  return (
    <div className="row vh-100 overflow-y-scroll overflow-x-hidden mx-0 position-relative homer ">
      <Mainabout />
      <Secondabout />
      <Thirdabout />
      <Forthlayout />
      <Fifthabout />
      <Lastabout />
    </div>
  );
}

export default About;
