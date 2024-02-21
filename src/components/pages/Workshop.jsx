import React from "react";
import Forthlayout from "../layout/about-layout/Forthlayout";
import Fifthabout from "../layout/about-layout/Fifthabout";
import Lastabout from "../layout/about-layout/Lastabout";
import Footerhome from "../layout/home-layout/Footerhome";
import Mainworkshop from "../layout/shop-layout/Mainworkshop";
import Secondworkshop from "../layout/port-layout/Secondworkshop";
import Thirdworkshop from "../layout/shop-layout/Thirdworkshop";
import Forthworkshop from "../layout/shop-layout/Forthworkshop";
import Fifthworkshop from "../layout/shop-layout/Fifthworkshop";
import Sixthworkshop from "../layout/shop-layout/Sixthworkshop";
import Lastworkshop from "../layout/shop-layout/Lastworkshop";
function Workshop() {
  return (
    <div className="row vh-100 overflow-y-scroll overflow-x-hidden mx-0 position-relative homer ps-lg-0 ps-2">
      <Mainworkshop />
      <Secondworkshop />
      <Thirdworkshop />
      <Forthworkshop />
      <Fifthworkshop />
      <Sixthworkshop />
      <Lastworkshop/>
      <Footerhome />
    </div>
  );
}

export default Workshop;
