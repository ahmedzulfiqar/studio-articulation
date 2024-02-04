import React from "react";
import logo from "../../media/1.png";
function Logo() {
  return (
    <div className="col-lg-1 col-6">
      <img
        src={logo}
        className="img-fluid d-xxl-block d-none"
        alt=""
        style={{
          width: "60px",
        }}
      />
      <img
        src={logo}
        className="img-fluid d-xxl-none d-block"
        alt=""
        style={{
          width: "40px",
        }}
      />
    </div>
  );
}

export default Logo;
