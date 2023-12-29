import React from "react";
import Button from "../../atoms/root-atoms/Button";

function Mainhometext() {
  return (
    <div className="col-lg-6 order-lg-1 order-0  col-12 p-0 d-flex align-items-center">
      <div className="p-0 w-100">
        <div className="btn fs-5 mb-lg-4 mb-3  rounded-pill bg-secondary py-2 px-lg-4 px-2 bg-opacity-10">
          Creativity <strong className="text-orange ">Starts </strong>Here
        </div>
        <div className="display-3 ms-lg-1 mb-lg-4 mb-3 fw-bolder">
          Unleash Your <span className="text-purple">Artistic Vision</span> In
          Architectural Form
        </div>
        <div className="ps-lg-1 pt-lg-3">
          <div className="btn btn-lg mainbtn px-4 border-0 fw-bolder py-2 shadow-sm">
            About Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainhometext;
