import React from "react";

function Mobilelinkitem({ data }) {
  return (
    <>
      <div className="mobileLinkItem ps-4 fw-bold py-2 my-1">{data.text}</div>
      <hr className="m-0 mt-1 " />
    </>
  );
}

export default Mobilelinkitem;
