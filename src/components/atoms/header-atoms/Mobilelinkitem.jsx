import React from "react";
import { Link } from "react-router-dom";

function Mobilelinkitem({ data }) {
  return (
    <Link to={data.path} className="text-dark">
      <div className="mobileLinkItem ps-4 fw-bold py-2 my-1">{data.text}</div>
      <hr className="m-0 mt-1 " />
    </Link>
  );
}

export default Mobilelinkitem;
