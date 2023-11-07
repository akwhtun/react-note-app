import React from "react";
import { useRef } from "react";

export default function Note({
  handleAddPageChange,
  handleSaveNote,
  defaultStyle,
}) {
  const titleRef = useRef();
  const noteRef = useRef();
  const date = new Date();

  function nothingTodo() {
    //
  }

  function colorStyle() {
    return {
      backgroundColor: defaultStyle.background,
      color: defaultStyle.color,
    };
  }
  function colorFontStyle() {
    return {
      backgroundColor: defaultStyle.background,
      color: defaultStyle.color,
      fontSize: defaultStyle.fontSize + "px",
    };
  }
  function handleNoteText() {
    handleAddPageChange("addNoteForm");
    const title = titleRef.current.value;
    const note = noteRef.current.value;
    const color = defaultStyle.color;
    const background = defaultStyle.background;
    const fontSize = defaultStyle.fontSize;
    title.trim().length > 0 && note.trim().length > 0
      ? handleSaveNote({ note, title, color, background, fontSize })
      : nothingTodo();
    titleRef.current.value = "";
    noteRef.current.value = "";
  }
  return (
    <div className="text-area" style={colorStyle()}>
      <p className="back" onClick={handleNoteText}>
        &#8592;
      </p>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          style={colorStyle()}
        />
      </div>
      <div className="date">
        <p>{date.toLocaleDateString()}</p>
      </div>
      <div className="note">
        <textarea
          placeholder="Write your note..."
          ref={noteRef}
          style={colorFontStyle()}
        ></textarea>
      </div>
    </div>
  );
}
