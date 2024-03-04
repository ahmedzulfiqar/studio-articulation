import React from "react";
import { Link } from "react-router-dom";

function Mobilelinkitem({ data, open, setopen }) {
  return (
    <Link to={data.path} className="text-dark" onClick={() => setopen(false)}>
      <div className="mobileLinkItem ps-4 fw-bold py-2 my-1">{data.text}</div>
      <hr className="m-0 mt-1 " />
    </Link>
  );
}

export default Mobilelinkitem;
