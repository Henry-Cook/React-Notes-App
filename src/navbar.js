import React from "react";

function Navbar(props) {
  return (
    <div className="containerxl bg-orange-300 flex flex-row h-20 content-center justify-center items-center">
      <h1 className="text-2xl">Quick Notes</h1>

      <button
        className="m-4 px-5 bg-orange-400 border-gray-400 rounded-full h-10 hover:bg-orange-500 "
        onClick={props.click}
      >
        +
      </button>
    </div>
  );
}

export default Navbar;
