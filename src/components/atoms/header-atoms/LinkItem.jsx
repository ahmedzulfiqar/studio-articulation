import React from "react";

function LinkItem({ data }) {
  return (
    <div className="LinkItem fw-bold px-2 mx-1 text-uppercase">{data.text}</div>
  );
}

export default LinkItem;
