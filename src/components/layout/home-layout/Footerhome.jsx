import React from "react";
import Svg4 from "../../utilities/Svg4";
function Footerhome() {
  return (
    <footer
      class="text-center text-lg-start mt-5 bg-body-tertiary text-muted home"
      style={{
        scrollSnapAlign: "center",
        backgroundSize: "cover",
      }}
    >
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div className=" col-xl-3 ms-auto mb-4">
              <Svg4 />
            </div>
            <div class=" col-xl-3 me-auto mb-4">
              <h6 class="text-uppercase text-green  fw-bold mb-4">
                Studio Articulation
              </h6>
              <p>
                Driven by a deep understanding of the built environment and a
                keen eye for detail,I utilize digital tools to create impactful
                architectural illustrations.
              </p>
            </div>
            <div class=" col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-green ">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div class="col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-green ">Contact</h6>
              <p>New York, NY 10012, US</p>
              <p>info@example.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footerhome;
