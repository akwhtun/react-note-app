import React from "react";
import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import Note from "./components/Note";
import "./App.css";

export default function App() {
  const date = new Date();
  const noteItems = [
    {
      id: nanoid(),
      title: "React js",
      note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sunt, possimus minus eligendi est explicabo exercitationem a nulla eos. Delectus?",
      style: {
        color: "black",
        background: "#f1f3f4",
        fontSize: "20",
        image: "none",
      },
      date: date.toLocaleDateString(),
    },
    {
      id: nanoid(),
      title: "React js",
      note: "noet 2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sunt, possimus minus eligendi est explicabo exercitationem a nulla eos. Delectus?",
      style: {
        color: "black",
        background: "#f1f3f4",
        fontSize: "20",
        image: "none",
      },
      date: date.toLocaleDateString(),
    },
  ];

  const [notes, setNotes] = useState(noteItems);
  const optionRef1 = useRef();
  const optionRef2 = useRef();
  const optionRef3 = useRef();
  const optionRef4 = useRef();
  const wrapperRef = useRef();

  const options = [optionRef1, optionRef2, optionRef3, optionRef4];

  function handleShow(event) {
    options.map((option) => option.current.classList.remove("show"));
    const selectedItem = event.target.closest(".option");
    selectedItem.className.includes("show")
      ? selectedItem.classList.remove("show")
      : selectedItem.classList.add("show");
  }

  function handleRemove(event) {
    const removeItem = event.target.closest(".option");
    removeItem.classList.remove("show");
  }

  function handlePageChange() {
    const name = wrapperRef.current;
    name.className.includes("show")
      ? name.classList.remove("show")
      : name.classList.add("show");
  }
  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="noteLists">
        <div className="plus" onClick={handlePageChange}>
          &#43;
        </div>
        {noteItems.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div className="container">
        <div className="text-area">
          <p className="back" onClick={handlePageChange}>
            &#8592;
          </p>
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
          <div className="option" ref={optionRef1}>
            <div className="color" onClick={handleShow}></div>
            <div className="items">
              <p className="black"></p>
              <p className="white"></p>
              <p className="pink"></p>
              <p className="violet"></p>
              <p className="black"></p>
              <p className="white"></p>
              <p className="pink"></p>
              <p className="violet"></p>
              <span className="cross" onClick={handleRemove}>
                &times;
              </span>
            </div>
          </div>
          <div className="option" ref={optionRef2}>
            <div className="background" onClick={handleShow}></div>
            <div className="items">
              <p className="black"></p>
              <p className="white"></p>
              <p className="pink"></p>
              <p className="violet"></p>
              <span className="cross" onClick={handleRemove}>
                &times;
              </span>
            </div>
          </div>
          <div className="option" ref={optionRef3}>
            <div className="image" onClick={handleShow}></div>
            <div className="items">
              <p className="black"></p>
              <p className="white"></p>
              <p className="pink"></p>
              <p className="violet"></p>
              <span className="cross" onClick={handleRemove}>
                &times;
              </span>
            </div>
          </div>
          <div className="option" ref={optionRef4}>
            <div className="fontSize" onClick={handleShow}></div>
            <div className="items">
              <p className="black"></p>
              <p className="white"></p>
              <p className="pink"></p>
              <p className="violet"></p>
              <span className="cross" onClick={handleRemove}>
                &times;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
