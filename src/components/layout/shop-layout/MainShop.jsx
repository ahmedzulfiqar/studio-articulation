import React from "react";
import pexl from "../../media/pexels-lumn-316466.jpg";
import Barshop from "./Barshop";

function MainShop() {
  return (
    <div className="col-12 p-0">
      <div
        className="row m-0  justify-content-center align-items-center border"
        style={{
          backgroundImage: `url(${pexl})`,
          height: "40vh",
          backgroundSize: "100% 200%",
          backgroundPosition: "bottom",
        }}
      >
        <div className="col-lg-8 col-12 p-0 ">
          <div className="row m-0 ">
            <div className="col-lg-6 col-12 p-0  text-lg-start text-center display-2 text-uppercase fw-bolder d-lg-block d-none">
              architectural <span className="text-red">resource Shop</span>
            </div>{" "}
            <div className="col-lg-6 col-12 p-0 text-lg-start text-center display-5 text-uppercase fw-bolder d-lg-none d-block">
              architectural <span className="text-red">resource Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainShop;
