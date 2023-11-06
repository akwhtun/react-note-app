import React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import ReadNote from "./components/ReadNote";
import ColorOption from "./components/ColorOption";
import BackgroundOption from "./components/BackgroundOption";
import FontSizeOption from "./components/FontSizeOption";
import BackgroundImageOption from "./components/BackgroundImageOption";
import "./App.css";

export default function App() {
  const colorOption = [
    {
      id: 0,
      name: "purple",
      value: "#890189",
    },
    {
      id: 1,
      name: "white",
      value: "#dcdcdc",
    },
    {
      id: 2,
      name: "blue",
      value: "#0470dd",
    },
    {
      id: 3,
      name: "pink",
      value: "#ff1493",
    },
    {
      id: 4,
      name: "box",
      value: "",
    },
  ];

  const backgroundOption = [
    {
      id: 0,
      name: "black",
      value: "#2d2b55",
    },
    {
      id: 1,
      name: "lime",
      value: "#3a913a",
    },
    {
      id: 2,
      name: "orange",
      value: "#c14112",
    },
    {
      id: 3,
      name: "yellow",
      value: "#b8b327",
    },
    {
      id: 4,
      name: "box",
      value: "",
    },
  ];

  const defaultOption = {
    color: "#1a1a1a",
    background: "#f1f3f4",
    fontSize: "20px",
    backgroundImage: "none",
  };

  const [notes, setNotes] = useState([]);
  const [formSwitch, setFormSwitch] = useState("addNoteForm");
  const [selectedNoteId, setSelectedNoteId] = useState();
  const selectedNote = useMemo(() => {
    return notes.find((note) => note.id === selectedNoteId);
  }, [selectedNoteId, notes]);

  const [color, setColor] = useState(colorOption);
  const [background, setBackground] = useState(backgroundOption);

  const [defaultStyle, setDefaultStyle] = useState(defaultOption);

  const optionRef1 = useRef();
  const optionRef2 = useRef();
  const optionRef3 = useRef();
  const optionRef4 = useRef();
  const wrapperRef = useRef();
  const crossRef = useRef();

  const options = [optionRef1, optionRef2, optionRef3, optionRef4];

  const STORAGE_KEY = "REACT_NOTE_APP";

  useEffect(() => {
    const jsonData = localStorage.getItem(STORAGE_KEY);
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
    crossRef.current.classList.add("show");
  }

  function handleRemove() {
    options.map((option) => option.current.classList.remove("show"));
    crossRef.current.classList.remove("show");
  }

  function handleAddPageChange(form) {
    setFormSwitch(form);
    const name = wrapperRef.current;
    name.className.includes("show")
      ? name.classList.remove("show")
      : name.classList.add("show");
  }

  function handleReadPageChange(form, id) {
    setFormSwitch(form);
    setSelectedNoteId(id);
    const name = wrapperRef.current;
    name.className.includes("show")
      ? name.classList.remove("show")
      : name.classList.add("show");
  }

  //update note
  function handleUpdateChange(form, id, title, note) {
    handleAddPageChange(form);
    setNotes((prenotes) => {
      return prenotes.map((prenote) => {
        if (prenote.id !== id) {
          return prenote;
        } else {
          return { ...prenote, title, note };
        }
      });
    });
  }

  //add note
  function handleSaveNote({ title, note, color, background }) {
    const preNote = notes;
    const newNote = {
      id: nanoid(),
      title,
      note,
      style: {
        color,
        background,
        fontSize: "20",
        image: "none",
      },
      date: date.toLocaleDateString(),
    };
    setNotes([newNote, ...preNote]);
  }

  //delete note
  function handleDeleteNote(id) {
    const preNote = notes;
    setNotes(preNote.filter((note) => note.id !== id));
  }

  //options
  function containerStyle() {
    return formSwitch === "readNoteForm"
      ? {
          backgroundColor: selectedNote && selectedNote.style.background,
          color: selectedNote && selectedNote.style.color,
        }
      : { backgroundColor: defaultStyle.background, color: defaultStyle.color };
  }
  //color change
  function addNoteColorChange(color) {
    const style = { ...defaultStyle };
    style.color = color;
    setDefaultStyle(style);
  }

  function readNoteColorChange(noteId, colorId, colorValue) {
    setColor((preColor) =>
      preColor.map((color) => {
        if (color.id !== colorId) return color;
        else return { ...color, value: colorValue };
      })
    );
    const preNotes = [...notes];
    const getNote = preNotes.find((preNote) => preNote.id === noteId);
    getNote.style.color = colorValue;
    setNotes(preNotes);
  }
  function handleNoteColorChange(noteId, colorId, colorValue) {
    formSwitch === "addNoteForm"
      ? addNoteColorChange(colorValue)
      : readNoteColorChange(noteId, colorId, colorValue);
  }
  //background change
  function addNoteBackgroundChange(background) {
    const style = { ...defaultStyle };
    style.background = background;
    setDefaultStyle(style);
  }
  function readNoteBackgroundChange(noteId, backgroundId, backgroundValue) {
    setBackground((preBackground) =>
      preBackground.map((back) => {
        if (back.id !== backgroundId) return back;
        else return { ...back, value: backgroundValue };
      })
    );
    const preNotes = [...notes];
    const getNote = preNotes.find((preNote) => preNote.id === noteId);
    getNote.style.background = backgroundValue;
    setNotes(preNotes);
  }
  function handleNoteBackgroundChange(noteId, backgroundId, backgroundValue) {
    formSwitch === "addNoteForm"
      ? addNoteBackgroundChange(backgroundValue)
      : readNoteBackgroundChange(noteId, backgroundId, backgroundValue);
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="noteLists">
        <div
          className="plus"
          onClick={() => handleAddPageChange("addNoteForm")}
        >
          &#43;
        </div>
        {notes.map((note) => {
          return (
            <NoteList
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleReadPageChange={handleReadPageChange}
            />
          );
        })}
      </div>
      <div className="container" style={containerStyle()}>
        {formSwitch === "addNoteForm" ? (
          <Note
            handleAddPageChange={handleAddPageChange}
            handleSaveNote={handleSaveNote}
            defaultStyle={defaultStyle}
          />
        ) : (
          <ReadNote
            handleUpdateChange={handleUpdateChange}
            selectedNote={selectedNote}
          />
        )}
        <div className="options">
          <div className="option" ref={optionRef1}>
            <div className="color" onClick={handleShow}></div>
            <div className="items">
              {color.map((c, index) => (
                <ColorOption
                  key={index}
                  colorValue={c}
                  selectedNote={selectedNote}
                  defaultStyle={defaultStyle}
                  handleNoteColorChange={handleNoteColorChange}
                  formSwitch={formSwitch}
                />
              ))}
            </div>
          </div>
          <div className="option" ref={optionRef2}>
            <div className="background" onClick={handleShow}></div>
            <div className="items">
              {background.map((back, index) => (
                <BackgroundOption
                  key={index}
                  backgroundValue={back}
                  selectedNote={selectedNote}
                  defaultStyle={defaultStyle}
                  handleNoteBackgroundChange={handleNoteBackgroundChange}
                  formSwitch={formSwitch}
                />
              ))}
            </div>
          </div>

          <FontSizeOption handleShow={handleShow} optionRef3={optionRef3} />
          <BackgroundImageOption
            handleShow={handleShow}
            optionRef4={optionRef4}
          />
        </div>
        <span className="cross" ref={crossRef} onClick={handleRemove}>
          &times;
        </span>
      </div>
    </div>
  );
}
