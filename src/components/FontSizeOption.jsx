import React from "react";

export default function FontSizeOption({ handleShow, optionRef3 }) {
  return (
    <div className="option" ref={optionRef3}>
      <div className="image" onClick={handleShow}></div>
      <div className="items">
        <p className="black"></p>
        <p className="white"></p>
        <p className="pink"></p>
        <p className="violet"></p>
      </div>
    </div>
  );
}
