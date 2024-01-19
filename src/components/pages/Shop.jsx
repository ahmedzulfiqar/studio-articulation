import React, { useState } from "react";
import MainShop from "../layout/shop-layout/MainShop";
import Barshop from "../layout/shop-layout/Barshop";
import Cardcovershop from "../layout/shop-layout/Cardcovershop";

function Shop() {
  const [category, setcategory] = useState("Vegetation");
  const [inputval, setinputval] = useState("");
  return (
    <div className="row mx-0 position-relative hello2">
      <MainShop />
      <div className="row m-0 justify-content-center">
        <Barshop
          category={category}
          setcategory={setcategory}
          inputval={inputval}
          setinputval={setinputval}
        />
        <Cardcovershop
          category={category}
          setcategory={setcategory}
          inputval={inputval}
          setinputval={setinputval}
        />
      </div>
    </div>
  );
}

export default Shop;
