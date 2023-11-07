import React from "react";
import { useState, useMemo } from "react";

export default function Note({ selectedNote, handleUpdateChange }) {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  useMemo(() => {
    setTitle(selectedNote && selectedNote.title);
    setNote(selectedNote && selectedNote.note);
  }, [selectedNote]);

  function handleChange() {
    handleUpdateChange("readNoteForm", selectedNote.id, title, note);
  }

  function colorStyle() {
    return {
      backgroundColor: selectedNote && selectedNote.style.background,
      color: selectedNote && selectedNote.style.color,
    };
  }

  function colorFontStyle() {
    return {
      backgroundColor: selectedNote && selectedNote.style.background,
      color: selectedNote && selectedNote.style.color,
      fontSize: selectedNote && selectedNote.style.fontSize + "px",
    };
  }

  return (
    <div className="text-area" style={colorStyle()}>
      <p className="back" onClick={handleChange}>
        &#8592;
      </p>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={colorStyle()}
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
          style={colorFontStyle()}
        ></textarea>
      </div>
    </div>
  );
}
