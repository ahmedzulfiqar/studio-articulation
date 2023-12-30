import React from "react";
import Logo from "../../atoms/header-atoms/Logo";
import List from "../../blocks/header-blocks/List";
function Navbar() {
  return (
    <div
      className="col-12 p-0  py-lg-2 py-1 position-fixed bg-light"
      style={{ position: "relative", zIndex: "20" }}
    >
      <div className="container p-0 ">
        <div className="row m-0 justify-content-between px-lg-0 px-3">
          <Logo />
          <List />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
