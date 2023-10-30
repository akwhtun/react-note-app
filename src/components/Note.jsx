import React from "react";

export default function Note({ note }) {
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
    const image = note.style.image;
    return {
      background: background,
      // backgroundImage: URL(image),
    };
  }
  return (
    <div className="list" style={getBackgroundStyle()}>
      <p className="noteTitle">{note.title}</p>
      <p className="noteText" style={getTextStyle()}>
        {note.note}
      </p>
      <p className="noteDate">{note.date}</p>
    </div>
  );
}
