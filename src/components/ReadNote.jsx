import React from "react";
import { useState, useMemo } from "react";

//background image
import back1 from "../covers/back1.jpg";
import back2 from "../covers/back2.jpg";
import back3 from "../covers/back3.jpg";
import back4 from "../covers/back4.jpg";
import back5 from "../covers/back5.jpg";
import back6 from "../covers/back6.jpg";

export default function Note({
  selectedNote,
  handleUpdateChange,
  readNoteDefault,
}) {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  useMemo(() => {
    setTitle(selectedNote && selectedNote.title);
    setNote(selectedNote && selectedNote.note);
  }, [selectedNote]);

  function nothingTodo() {
    //
  }

  function handleChange() {
    title.trim().length > 0 || note.trim().length > 0
      ? handleUpdateChange("readNoteForm", selectedNote.id, title, note)
      : nothingTodo();
  }

  let path;
  switch (selectedNote && selectedNote.style.image) {
    case "back1":
      path = back1;
      break;
    case "back2":
      path = back2;
      break;
    case "back3":
      path = back3;
      break;
    case "back4":
      path = back4;
      break;
    case "back5":
      path = back5;
      break;
    case "back6":
      path = back6;
      break;
    default:
      break;
  }
  const NoteStyle = {
    coverStyle: {
      // return {
      backgroundImage: `url(${path})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: selectedNote && selectedNote.style.background,
      color: selectedNote && selectedNote.style.color,

      // };
    },
    coverFontStyle: {
      backgroundImage: `url(${path})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: selectedNote && selectedNote.style.background,
      color: selectedNote && selectedNote.style.color,

      fontSize: selectedNote && selectedNote.style.fontSize + "px",
    },
  };

  return (
    <div className="text-area" style={NoteStyle.coverStyle}>
      <div className="pre">
        <p className="back" onClick={handleChange}>
          &#8592;
        </p>
        <p
          className="restore"
          style={{
            fontSize: "18px",
            border: `1px solid ${selectedNote && selectedNote.style.color}`,
          }}
          onClick={() => readNoteDefault(selectedNote.id)}
        >
          Restore Default Theme
        </p>
      </div>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={NoteStyle.coverStyle}
        />
      </div>
      <div className="date">
        <p>{selectedNote && selectedNote.date}</p>
      </div>
      <div className="note">
        <textarea
          placeholder="Write your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={NoteStyle.coverFontStyle}
        ></textarea>
      </div>
    </div>
  );
}
