import React from "react";
import Button from "../../atoms/root-atoms/Button";

function Mainhometext() {
  return (
    <div className="col-lg-6 order-lg-1 order-0 ps-lg-2 ps-0  col-12 p-0 d-flex align-items-center text-lg-start text-center">
      <div className="p-0 w-100">
        <div className="btn fs-5 mb-lg-4 mb-3  rounded-pill bg-secondary py-2 px-lg-4 px-2 bg-opacity-10  d-lg-inline-block d-none">
          Creativity <strong className="text-orange ">Starts </strong>Here
        </div>
        <div className="btn fs-6 mb-lg-4 mb-3  rounded-pill bg-secondary py-2 px-lg-4 px-2 bg-opacity-10  d-lg-none d-lg-inline-block">
          Creativity <strong className="text-orange ">Starts </strong>Here
        </div>
        <div className="display-3 ms-lg-1 mb-lg-4 mb-3 fw-bolder d-lg-block d-none">
          Unleash Your <span className="text-purple">Artistic Vision</span> In
          Architectural Form
        </div>
        <div className="display-5 ms-lg-1 mb-lg-4 mb-3 px-1 fw-bolder d-lg-none d-block">
          Unleash Your <span className="text-purple">Artistic Vision</span> In
          Architectural Form
        </div>
        <div className="ps-lg-1 pt-lg-2">
          <div className="btn btn-lg mainbtn px-4 border-0 fw-bolder py-lg-3 py-2 shadow-sm">
            About Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainhometext;
