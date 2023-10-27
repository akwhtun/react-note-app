import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="text-area">
        <div className="title">
          <input type="text" placeholder="Title" />
        </div>
        <div className="date">
          <p>222222</p>
        </div>
        <div className="note">
          <textarea></textarea>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <div className="color"></div>
          <div className="items">
            <ul></ul>
          </div>
        </div>
        <div className="option">
          <div className="background"></div>
        </div>
        <div className="option">
          <div className="image"></div>
        </div>
        <div className="option">
          <div className="fontSize"></div>
        </div>
      </div>
    </div>
  );
}
