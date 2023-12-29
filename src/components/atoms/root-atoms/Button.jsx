import React from "react";

function Button({ data }) {
  return (
    <div className="btn btn-lg d-lg-inline d-none mainbtn px-4 border-0 fw-bolder py-2 shadow-sm">
      {data.text}
    </div>
  );
}

export default Button;
