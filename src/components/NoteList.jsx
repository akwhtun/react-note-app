import React from "react";

export default function NoteList({
  note,
  handleDeleteNote,
  handleReadPageChange,
}) {
  function getTextStyle() {
    const color = note.style.color;
    const fontSize = note.style.fontSize;
    return {
      color: color,
      fontSize: fontSize,
    };
  }
  function getBackgroundStyle() {
    const background = note.style.background;
    // const image = note.style.image;
    return {
      background: background,
      // backgroundimage: URL(image),
    };
  }

  return (
    <div style={getBackgroundStyle()} className="list">
      <div onClick={() => handleReadPageChange("readNoteForm", note.id)}>
        <p className="noteTitle">{note.title}</p>
        <p className="noteText" style={getTextStyle()}>
          {note.note.substring(0, 400)}...
        </p>
      </div>
      <div className="noteFooter">
        <p className="noteDate">{note.date}</p>
        <p className="trash" onClick={() => handleDeleteNote(note.id)}>
          &#x1F5D1;
        </p>
      </div>
    </div>
  );
}
