import React from "react";
import Navbar from "../layout/header-layout/Navbar";

function Header({classe}) {
  return (
    <div className="row m-0">
      <Navbar classe={classe}/>
    </div>
  );
}

export default Header;
