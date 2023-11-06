import React from "react";

export default function BackgroundImageOption({ handleShow, optionRef4 }) {
  return (
    <div className="option" ref={optionRef4}>
      <div className="fontSize" onClick={handleShow}></div>
      <div className="items">
        <p className="black"></p>
        <p className="white"></p>
        <p className="pink"></p>
        <p className="violet"></p>
      </div>
    </div>
  );
}
