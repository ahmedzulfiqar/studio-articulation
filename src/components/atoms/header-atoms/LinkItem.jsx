import React from "react";
import { Link } from "react-router-dom";

function LinkItem({ data, classe }) {
  return (
    <Link
      className={`LinkItem fw-bold px-2 mx-1 text-uppercase ${classe} bg-transparent`}
      to={data.path}
    >
      {data.text}
    </Link>
  );
}

export default LinkItem;
