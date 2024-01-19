import React from "react";
import Shopcard from "./Shopcard";
import { Shopdata } from "../../data/Shopdata";

function Cardcovershop({ category, inputval }) {
  const filteredItems = Shopdata.filter(
    (item) =>
      item.category.includes(category) &&
      item.name.toLowerCase().includes(inputval.toLowerCase())
  );

  return (
    <div className="col-12 p-0 py-5 align-self-center">
      <div className="container">
        <div className="row m-0">
          {filteredItems.length === 0 ? (
            <div className="display-6 text-uppercase">
              <i className="fa-regular fa-face-frown pe-3 text-orange"></i>
              No Items
            </div>
          ) : (
            filteredItems.map((data) => <Shopcard data={data} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Cardcovershop;
