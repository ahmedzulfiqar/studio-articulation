import React, { useState } from "react";
import Links from "../../atoms/header-atoms/Links";
import Button from "../../atoms/root-atoms/Button";
import Mobilelist from "./Mobilelist";
import Toggler from "../../utilities/Toggler";
import { Link } from "react-router-dom";
function List({ classe }) {
  const [open, setopen] = useState(false);
  return (
    <div className="col-lg-11  col-6 align-self-center text-end p-0 ">
      <div className="row m-0 justify-content-evenly  text-end d-lg-flex d-none">
        <Links classe={classe} />
      </div>
      <Mobilelist open={open} setopen={setopen} />
      <Toggler open={open} setopen={setopen} classe={classe} />
    </div>
  );
}

export default List;
