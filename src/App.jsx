import React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
import NoNote from "./components/NoNote";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import ReadNote from "./components/ReadNote";
import ColorOption from "./components/ColorOption";
import BackgroundOption from "./components/BackgroundOption";
import FontSizeOption from "./components/FontSizeOption";
import BackgroundImageOption from "./components/BackgroundImageOption";
import "./App.css";

//background image
import back1 from "./covers/back1.jpg";
import back2 from "./covers/back2.jpg";
import back3 from "./covers/back3.jpg";
import back4 from "./covers/back4.jpg";
import back5 from "./covers/back5.jpg";
import back6 from "./covers/back6.jpg";

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
      value: "#1e1d1e",
    },
    {
      id: 1,
      name: "bluedark",
      value: "#2d2b55",
    },
    {
      id: 2,
      name: "demon",
      value: "#9400d3",
    },
    {
      id: 3,
      name: "lime",
      value: "#01cf50",
    },
    {
      id: 4,
      name: "box",
      value: "",
    },
  ];

  const fontSizeOption = {
    min: 10,
    max: 30,
    value: 20,
  };

  const backgroundImageOption = [
    {
      id: "0",
      name: "photo1",
      value: "back1",
    },
    {
      id: "1",
      name: "photo2",
      value: "back2",
    },
    {
      id: "2",
      name: "photo3",
      value: "back3",
    },
    {
      id: "3",
      name: "photo4",
      value: "back4",
    },
    {
      id: "4",
      name: "photo5",
      value: "back5",
    },
    {
      id: "5",
      name: "photo6",
      value: "back6",
    },
    {
      id: "6",
      name: "none",
      value: "none",
    },
  ];

  const defaultOption = {
    color: "#1a1a1a",
    background: "#f1f3f4",
    fontSize: "20",
    image: "none",
  };

  const [notes, setNotes] = useState([]);
  const [formSwitch, setFormSwitch] = useState("addNoteForm");
  const [selectedNoteId, setSelectedNoteId] = useState();
  const selectedNote = useMemo(() => {
    return notes.find((note) => note.id === selectedNoteId);
  }, [selectedNoteId, notes]);

  const [color, setColor] = useState(colorOption);
  const [background, setBackground] = useState(backgroundOption);
  const [fontSize, setFontSize] = useState(fontSizeOption);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageOption);

  const [defaultStyle, setDefaultStyle] = useState(defaultOption);

  const [searchText, setSearchText] = useState("");

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
  function handleSaveNote({ title, note, color, background, fontSize, image }) {
    const preNote = notes;
    const newNote = {
      id: nanoid(),
      title,
      note,
      style: {
        color,
        background,
        fontSize,
        image,
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

  //fontSize change
  function addNoteFontSizeChange(size) {
    const style = { ...defaultStyle };
    style.fontSize = size;
    setDefaultStyle(style);
  }
  function readNoteFontSizeChane(noteId, size) {
    const font = { ...fontSize };
    font.value = size;
    setFontSize(font);
    const preNotes = [...notes];
    const getNote = preNotes.find((preNote) => preNote.id === noteId);
    getNote.style.fontSize = size;
    setNotes(preNotes);
  }
  function handleNoteFontSizeChange(noteId, size) {
    formSwitch === "addNoteForm"
      ? addNoteFontSizeChange(size)
      : readNoteFontSizeChane(noteId, size);
  }

  //backgroundImage Change
  function addNoteBackgroundImageChange(value) {
    const style = { ...defaultStyle };
    style.image = value;
    setDefaultStyle(style);
  }

  function readNoteBackgroundImageChange(noteId, imageId, value) {
    setBackgroundImage((preImage) =>
      preImage.map((image) => {
        if (image.id !== imageId) return image;
        else return { ...image, value: value };
      })
    );
    const preNotes = [...notes];
    const getNote = preNotes.find((preNote) => preNote.id === noteId);
    getNote.style.image = value;
    setNotes(preNotes);
  }

  function handleBackgroundImageChange(noteId, imageId, value) {
    formSwitch === "addNoteForm"
      ? addNoteBackgroundImageChange(value)
      : readNoteBackgroundImageChange(noteId, imageId, value);
  }

  //search
  function handleSearchNote(text) {
    setSearchText(text);
  }

  //restore default theme
  function addNoteDefault() {
    setDefaultStyle(defaultOption);
  }
  function readNoteDefault(noteId) {
    const preNotes = [...notes];
    const getNote = preNotes.find((preNote) => preNote.id === noteId);
    getNote.style.color = defaultOption.color;
    getNote.style.background = defaultOption.background;
    getNote.style.fontSize = defaultOption.fontSize;
    getNote.style.image = defaultOption.image;
    setNotes(preNotes);
  }

  //styles
  function containerStyle() {
    return formSwitch === "readNoteForm"
      ? {
          backgroundColor: selectedNote && selectedNote.style.background,
          color: selectedNote && selectedNote.style.color,
          fontSize: selectedNote && selectedNote.style.fontSize + "px",
        }
      : {
          backgroundColor: defaultStyle.background,
          color: defaultStyle.color,
          fontSize: defaultStyle.fontSize + "px",
        };
  }
  function optionStyle() {
    let readPath;
    switch (selectedNote && selectedNote.style.image) {
      case "back1":
        readPath = back1;
        break;
      case "back2":
        readPath = back2;
        break;
      case "back3":
        readPath = back3;
        break;
      case "back4":
        readPath = back4;
        break;
      case "back5":
        readPath = back5;
        break;
      case "back6":
        readPath = back6;
        break;
      default:
        break;
    }
    let notePath;
    switch (defaultStyle.image) {
      case "back1":
        notePath = back1;
        break;
      case "back2":
        notePath = back2;
        break;
      case "back3":
        notePath = back3;
        break;
      case "back4":
        notePath = back4;
        break;
      case "back5":
        notePath = back5;
        break;
      case "back6":
        notePath = back6;
        break;
      default:
        break;
    }
    return formSwitch === "readNoteForm"
      ? {
          backgroundImage: `url(${readPath})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: selectedNote && selectedNote.style.background,
          color: selectedNote && selectedNote.style.color,
          fontSize: selectedNote && selectedNote.style.fontSize + "px",
        }
      : {
          backgroundImage: `url(${notePath})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundColor: defaultStyle.background,
          color: defaultStyle.color,
          fontSize: defaultStyle.fontSize + "px",
        };
  }

  return (
    <div className="wrapper" ref={wrapperRef}>
      {Object.keys(notes).length === 0 ? (
        <NoNote />
      ) : (
        <Search handleSearchNote={handleSearchNote} />
      )}
      <div className="plus" onClick={() => handleAddPageChange("addNoteForm")}>
        &#43;
      </div>
      <div className="noteLists">
        {notes
          .filter((noteText) =>
            noteText.note.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((note) => {
            return (
              <NoteList
                key={note.id}
                note={note}
                handleDeleteNote={handleDeleteNote}
                handleReadPageChange={handleReadPageChange}
                readNoteDefault={readNoteDefault}
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
            addNoteDefault={addNoteDefault}
          />
        ) : (
          <ReadNote
            handleUpdateChange={handleUpdateChange}
            selectedNote={selectedNote}
            readNoteDefault={readNoteDefault}
          />
        )}
        <div className="options" style={optionStyle()}>
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

          <div className="option" ref={optionRef3}>
            <div className="fontSize" onClick={handleShow}></div>
            <div className="items">
              <FontSizeOption
                fontSize={fontSize}
                selectedNote={selectedNote}
                defaultStyle={defaultStyle}
                handleNoteFontSizeChange={handleNoteFontSizeChange}
                formSwitch={formSwitch}
              />
            </div>
          </div>
          <div className="option" ref={optionRef4}>
            <div className="image" onClick={handleShow}></div>
            <div className="items images">
              {backgroundImage.map((image, index) => (
                <BackgroundImageOption
                  key={index}
                  backgroundImage={image}
                  selectedNote={selectedNote}
                  defaultStyle={defaultStyle}
                  handleBackgroundImageChange={handleBackgroundImageChange}
                  formSwitch={formSwitch}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="cross" ref={crossRef} onClick={handleRemove}>
          &times;
        </span>
      </div>
    </div>
  );
}
