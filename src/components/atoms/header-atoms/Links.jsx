import React from "react";
import LinkItem from "./LinkItem";
import Linkdata from "../../data/Linkdata";

function Links() {
  return (
    <div className="col-10 p-0 d-flex justify-content-end  align-self-center">
      {Linkdata.map((i) => {
        return <LinkItem data={i} />;
      })}
    </div>
  );
}

export default Links;
