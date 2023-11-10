import React from "react";
import { useRef } from "react";

export default function Note({
  handleAddPageChange,
  handleSaveNote,
  defaultStyle,
  addNoteDefault,
}) {
  const titleRef = useRef();
  const noteRef = useRef();
  const date = new Date();

  function nothingTodo() {
    //
  }

  function backgroundImage() {
    // let path = "back1.jpg";
    return {
      // backgroundImage: `url(${path})`,
      // backgroundAttachment: "fixed",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "center center",
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
    title.trim().length > 0 || note.trim().length > 0
      ? handleSaveNote({ note, title, color, background, fontSize })
      : nothingTodo();
    titleRef.current.value = "";
    noteRef.current.value = "";
  }
  return (
    <div className="text-area" style={backgroundImage()}>
      <div className="pre">
        <p className="back" onClick={handleNoteText}>
          &#8592;
        </p>
        <p
          className="restore"
          onClick={() => addNoteDefault()}
          style={{
            fontSize: "18px",
            border: `1px solid ${defaultStyle.color}`,
          }}
        >
          Restore Default Theme
        </p>
      </div>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          style={backgroundImage()}
        />
      </div>
      <div className="date">
        <p>{date.toLocaleDateString()}</p>
      </div>
      <div className="note">
        <textarea
          placeholder="Write your note..."
          ref={noteRef}
          style={backgroundImage()}
        ></textarea>
      </div>
    </div>
  );
}
