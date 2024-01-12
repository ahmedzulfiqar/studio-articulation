import React from "react";
import MainShop from "../layout/shop-layout/MainShop";
import Barshop from "../layout/shop-layout/Barshop";
import Cardcovershop from "../layout/shop-layout/Cardcovershop";

function Shop() {
  return (
    <div className="row mx-0 position-relative hello2">
      <MainShop />
      <div className="row m-0 justify-content-center">
        <Barshop />
        <Cardcovershop />
      </div>
    </div>
  );
}

export default Shop;
