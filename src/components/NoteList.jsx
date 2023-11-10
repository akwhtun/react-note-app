import React from "react";

export default function NoteList({
  note,
  handleDeleteNote,
  handleReadPageChange,
  readNoteDefault,
}) {
  function colorStyle() {
    return { background: note.style.background, color: note.style.color };
  }
  function fontStyle() {
    return {
      fontSize: note.style.fontSize + "px",
    };
  }

  const noteTitle = note.title === "" ? "Untitle" : note.title;
  return (
    <div className="list" style={colorStyle()}>
      <div
        onClick={() => handleReadPageChange("readNoteForm", note.id)}
        style={colorStyle()}
      >
        <p className="noteTitle">{noteTitle}</p>
        <p className="noteText" style={fontStyle()}>
          {note.note.substring(0, 170)}...
        </p>
      </div>
      <div className="noteFooter" style={colorStyle()}>
        <p className="noteDate">{note.date}</p>
        <div className="tra-def">
          <p
            className="def"
            style={{ border: `1px solid  ${note.style.color}` }}
            onClick={() => readNoteDefault(note.id)}
          >
            Default Theme
          </p>
          <p className="trash" onClick={() => handleDeleteNote(note.id)}>
            &#x1F5D1;
          </p>
        </div>
      </div>
    </div>
  );
}
