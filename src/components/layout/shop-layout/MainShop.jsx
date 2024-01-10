import React from "react";
import pexl from "../../media/pexels-lumn-316466.jpg";
function MainShop() {
  return (
    <div className="col-12 p-0">
      <div
        className="row m-0 justify-content-center"
        style={{
          backgroundImage: `url(${pexl})`,
          height: "40vh",
          backgroundSize: "100% 200%",
          backgroundPosition: "bottom",
        }}
      >
        <div className="col-8 p-0">
          <div className="row m-0">
            <div className="col-6 p-0 text-start  display-5 text-uppercase fw-bolder">
              architectural <span className="text-green">resource</span> shop
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="container p-0 mt-lg-5">
        <div className="row m-0 justify-content-center "></div>
      </div>
    </div>
  );
}

export default MainShop;
