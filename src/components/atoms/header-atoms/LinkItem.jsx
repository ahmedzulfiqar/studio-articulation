import React from "react";

function LinkItem({ data, classe }) {
  return (
    <div className={`LinkItem fw-bold px-2 mx-1 text-uppercase ${classe} bg-transparent`}>
      {data.text}
    </div>
  );
}

export default LinkItem;
