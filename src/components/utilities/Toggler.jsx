import React from "react";

function Toggler({ open, setopen, classe }) {
  return (
    <label
      class={`hamburger  align-self-center d-lg-none d-block bg-transparent `}
      onChange={() => setopen(!open)}
    >
      <input type="checkbox" checked={open}/>
      <svg viewBox="0 0 32 32">
        <path
          class={`line line-top-bottom ${classe}`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path class={`line ${classe}`} d="M7 16 27 16"></path>
      </svg>
    </label>
  );
}

export default Toggler;
