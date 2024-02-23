import React, { useRef, useState, useEffect } from "react";
import { architecturalElements } from "../../data/Shopdata";

function Barshop({ category, setcategory, inputval, setinputval }) {
  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scroller.offsetLeft);
      setScrollLeft(scroller.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
      scroller.scrollLeft = scrollLeft - walk;
    };

    scroller.addEventListener("mousedown", handleMouseDown);
    scroller.addEventListener("mouseleave", handleMouseLeave);
    scroller.addEventListener("mouseup", handleMouseUp);
    scroller.addEventListener("mousemove", handleMouseMove);

    return () => {
      scroller.removeEventListener("mousedown", handleMouseDown);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
      scroller.removeEventListener("mouseup", handleMouseUp);
      scroller.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);
  return (
    <div className="col-12 p-0 py-0 border-bottom align-self-center">
      <div className="container py-0">
        <div className="row m-0">
          <div
            className="col-lg-6 col-12 d-flex justify-content-between overflow-scroll p-0 py-3 scroller align-self-center"
            ref={scrollerRef}
          >
            {architecturalElements.map((i) => {
              return (
                <div
                  className={` ${
                    i.category == category ? "fw-bolder text-blue" : ""
                  }`}
                  style={{
                    width: "max-content",
                    margin: "0 10px",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => setcategory(i.category)}
                  key={i.category}
                >
                  {i.category}
                </div>
              );
            })}
          </div>
          <div className="col-lg-6 col-12 pb-lg-0 px-0 pb-3 align-self-center d-flex justify-content-end">
            <div className="row m-0 w-100 justify-content-end">
              <div className="col-lg-6 d-flex rounded-3 fw-light small border border-1 px-2">
                <input
                  type="text"
                  className="border-0 py-2 w-100"
                  placeholder="Search For Products"
                  onChange={(e) => setinputval(e.target.value)}
                />
                <div className="btn px-2 py-0 align-self-center">
                  <i className="fa fa-search text-blue" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barshop;
