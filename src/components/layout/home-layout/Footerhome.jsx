import React from "react";
import Svg4 from "../../utilities/Svg4";
function Footerhome() {
  return (
    <footer
      class="text-center text-lg-start mt-lg-5 py-0 bg-light text-muted px-0 "
      style={{
        scrollSnapAlign: "center",
        backgroundSize: "cover",
      }}
      id="vroom"
    >
      <section class="py-2  text-center">
        <a
          data-mdb-ripple-init
          class="btn btn-link btn-floating btn-lg text-body m-1"
          href="https://in.pinterest.com/rathoreritu91111/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fab fa-pinterest-p"></i>
        </a>

        <a
          data-mdb-ripple-init
          class="btn btn-link btn-floating btn-lg text-body m-1"
          href="https://www.behance.net/ritikarathore"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fab fa-behance"></i>
        </a>

        <a
          data-mdb-ripple-init
          class="btn btn-link btn-floating btn-lg text-body m-1"
          href="https://studioarticulation.gumroad.com/
          "
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fab fa-google"></i>
        </a>

        <a
          data-mdb-ripple-init
          class="btn btn-link btn-floating btn-lg text-body m-1"
          href="https://www.instagram.com/studio_articulation/?hl=en
          "
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fab fa-instagram"></i>
        </a>

        <a
          data-mdb-ripple-init
          class="btn btn-link btn-floating btn-lg text-body m-1"
          href="https://in.linkedin.com/in/ar-ritika-rathore-b5908a1a5 "
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </section>
      <section class="py-lg-3 pt-lg-2 py-3  px-0 ">
        <div class="container text-center p-0 ">
          <div className="row m-0 ">
            <div className="col-12 text-uppercase ">
              <div className="display-5 fw-bolder text-dark d-md-block d-none">
                <span className="text-"> Intrested </span> In{" "}
                <span className="text-"> Working </span>With{" "}
                <span className="text-"> US </span> ?
              </div>
              <div className="fs-6 fw-bolder text-dark d-md-none d-block">
                <span className="text-"> Intrested </span> In{" "}
                <span className="text-"> Working </span>With{" "}
                <span className="text-"> US </span> ?
              </div>
              <div className="fs-5 my-2 mt-4 fw-bold text-red d-md-block d-none">
                <a
                  href="https://mail.google.com/mail/u/0/#search/Joinstudioarticulation%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red"
                >
                  Joinstudioarticulation@gmail.com
                </a>
              </div>
              <div className=" my-2 mt-4 fw-bold text-red d-md-none d-block small">
                <a
                  href="https://mail.google.com/mail/u/0/#search/Joinstudioarticulation%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red small"
                >
                  Joinstudioarticulation@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footerhome;
