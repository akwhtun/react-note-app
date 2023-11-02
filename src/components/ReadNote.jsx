import React from "react";
import { useState, useMemo } from "react";

export default function Note({ selectedNote, handleUpdateChange }) {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  useMemo(() => {
    setTitle(selectedNote.title);
    setNote(selectedNote.note);
  }, [selectedNote]);

  function handleChange() {
    handleUpdateChange("readNoteForm", selectedNote.id, title, note);
  }
  return (
    <div className="text-area">
      <p className="back" onClick={handleChange}>
        &#8592;
      </p>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="date">
        <p>{selectedNote.date}</p>
      </div>
      <div className="note">
        <textarea
          placeholder="Write your note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
