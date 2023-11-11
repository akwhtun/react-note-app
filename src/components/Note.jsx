import React from "react";
import { useRef } from "react";

//background image
import back1 from "../covers/back1.jpg";
import back2 from "../covers/back2.jpg";
import back3 from "../covers/back3.jpg";
import back4 from "../covers/back4.jpg";
import back5 from "../covers/back5.jpg";
import back6 from "../covers/back6.jpg";

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

  function handleNoteText() {
    handleAddPageChange("addNoteForm");
    const title = titleRef.current.value;
    const note = noteRef.current.value;
    const color = defaultStyle.color;
    const background = defaultStyle.background;
    const fontSize = defaultStyle.fontSize;
    const image = defaultStyle.image;
    title.trim().length > 0 || note.trim().length > 0
      ? handleSaveNote({ note, title, color, background, fontSize, image })
      : nothingTodo();
    titleRef.current.value = "";
    noteRef.current.value = "";
  }

  //style
  let path;
  switch (defaultStyle.image) {
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
      backgroundColor: defaultStyle.background,
      color: defaultStyle.color,

      // };
    },
    coverFontStyle: {
      backgroundImage: `url(${path})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: defaultStyle.background,
      color: defaultStyle.color,

      fontSize: defaultStyle.fontSize + "px",
    },
  };
  return (
    <div className="text-area" style={NoteStyle.coverStyle}>
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
          style={NoteStyle.coverStyle}
        />
      </div>
      <div className="date">
        <p>{date.toLocaleDateString()}</p>
      </div>
      <div className="note">
        <textarea
          placeholder="Write your note..."
          ref={noteRef}
          style={NoteStyle.coverFontStyle}
        ></textarea>
      </div>
    </div>
  );
}
