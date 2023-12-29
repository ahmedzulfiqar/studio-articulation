import React from "react";
import Linkdata from "../../data/Linkdata";
import Mobilelinkitem from "./Mobilelinkitem";

function MobileLinks() {
  return (
    <div className="p-0">
      {Linkdata.map((i) => {
        return <Mobilelinkitem data={i} />;
      })}
    </div>
  );
}

export default MobileLinks;
