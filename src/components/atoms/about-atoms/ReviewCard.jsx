import React from "react";

function ReviewCard({ data }) {
  return (
    <div className="card p-0 -0 text-start px-lg-2 border-red">
      <div className="card-body">
        <div className="fs-2 text-dark fw-bolder text-uppercase">
          {data.name}
        </div>
        <div className="fs-5 mb-2 text-red fw-bolder text-uppercase">
          Student{" "}
        </div>
        <p className="text-dark opacity-75 overflow-scroll" style={{ height: "100px", overflow: "scroll" }}>
          {data.text}
        </p>{" "}
        <ul className="list-unstyled d-flex justify-content-start">
          <li>
            <i className="fas fa-star fa-sm text-red me-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-red me-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-red me-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-red me-1"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm text-red"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReviewCard;
