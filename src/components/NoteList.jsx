import React from "react";

export default function NoteList({
  note,
  handleDeleteNote,
  handleReadPageChange,
}) {
  function colorStyle() {
    return { background: note.style.background, color: note.style.color };
  }
  function colorFontStyle() {
    return {
      background: note.style.background,
      color: note.style.color,
      fontSize: note.style.fontSize + "px",
    };
  }
  return (
    <div style={colorStyle()} className="list">
      <div
        onClick={() => handleReadPageChange("readNoteForm", note.id)}
        style={colorStyle()}
      >
        <p className="noteTitle">{note.title}</p>
        <p className="noteText" style={colorFontStyle()}>
          {note.note.substring(0, 400)}...
        </p>
      </div>
      <div className="noteFooter" style={colorStyle()}>
        <p className="noteDate">{note.date}</p>
        <p className="trash" onClick={() => handleDeleteNote(note.id)}>
          &#x1F5D1;
        </p>
      </div>
    </div>
  );
}
