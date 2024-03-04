import React from "react";
import Linkdata from "../../data/Linkdata";
import Mobilelinkitem from "./Mobilelinkitem";

function MobileLinks({ open, setopen }) {
  return (
    <div className="p-0">
      {Linkdata.map((i) => {
        return <Mobilelinkitem data={i} open={open} setopen={setopen} />;
      })}
    </div>
  );
}

export default MobileLinks;
