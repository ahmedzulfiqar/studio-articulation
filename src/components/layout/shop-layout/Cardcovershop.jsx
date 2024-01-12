import React from "react";
import Shopcard from "./Shopcard";
import Shopdata from "../../data/Shopdata";

function Cardcovershop() {
  return (
    <div className="col-12 p-0 py-5 align-self-center">
      <div className="container">
        <div className="row m-0">
          {Shopdata.map((data) => {
            return <Shopcard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cardcovershop;
