import React from "react";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const optionRef1 = useRef();
  const optionRef2 = useRef();
  const optionRef3 = useRef();
  const optionRef4 = useRef();
  const wrapperRef = useRef();

  const options = [optionRef1, optionRef2, optionRef3, optionRef4];

  const STORAGE_KEY = "REACT_NOTE_APP";

  useEffect(() => {
    const jsonData = localStorage.getItem(STORAGE_KEY);
    console.log(jsonData);
    setNotes(JSON.parse(jsonData));
  }, []);

  useEffect(() => {
    const jsonData = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, jsonData);
  }, [notes]);

  const date = new Date();

  // page change
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

  //adding note
  function handleSaveNote({ title, note }) {
    //add note
    const preNote = notes;
    const newNote = {
      id: nanoid(),
      title,
      note,
      style: {
        color: "#1a1a1a",
        background: "#f1f3f4",
        fontSize: "20",
        image: "none",
      },
      date: date.toLocaleDateString(),
    };
    setNotes([newNote, ...preNote]);
  }

  //deleting note
  function handleDeleteNote(id) {
    const preNote = notes;
    setNotes(preNote.filter((note) => note.id !== id));
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="noteLists">
        <div className="plus" onClick={handlePageChange}>
          &#43;
        </div>
        {notes.map((note) => {
          return (
            <NoteList
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
            />
          );
        })}
      </div>
      <div className="container">
        <Note
          handlePageChange={handlePageChange}
          handleSaveNote={handleSaveNote}
        />
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
