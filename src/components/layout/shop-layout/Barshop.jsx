import React from "react";

function Barshop() {
  return (
    <div className="col-12 p-0 py-3 border-bottom align-self-center">
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-6 col-12 d-flex justify-content-start overflow-scroll  align-self-center">
            <div className="fs-6 text-dark">All</div>
            <div className="fs-6 text-dark opacity-75 px-3 ps-4">Vectors </div>
            <div className="fs-6 text-dark opacity-75 px-3">Trees </div>
            <div className="fs-6 text-dark opacity-75 px-3">Brushes </div>
            <div className="fs-6 text-dark opacity-75 px-3">Patterns</div>
            <div className="fs-6 text-dark opacity-75 px-3">Render </div>
          </div>
          <div className="col-6  align-self-center d-flex justify-content-end">
            <div className="row m-0 w-100 justify-content-end">
              <div className="col-lg-6 d-flex rounded-3 fw-light small border border-1 px-2  ">
                <input
                  type="text"
                  className="border-0 py-2 w-100"
                  placeholder="Search For Products"
                />
                <div className="btn px-2 py-0 align-self-center ">
                  <i class="fa fa-search text-green" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barshop;
