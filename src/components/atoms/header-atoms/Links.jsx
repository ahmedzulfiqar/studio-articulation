import React from "react";
import LinkItem from "./LinkItem";
import Linkdata from "../../data/Linkdata";

function Links({ classe, open, setopen }) {
  return (
    <div className="col-10 p-0 d-flex justify-content-end  align-self-center">
      {Linkdata.map((i) => {
        return <LinkItem data={i} classe={classe} open={open} setopen={setopen}/>;
      })}
    </div>
  );
}

export default Links;
