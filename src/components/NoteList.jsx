import React from "react";

//background image
import back1 from "../covers/back1.jpg";
import back2 from "../covers/back2.jpg";
import back3 from "../covers/back3.jpg";
import back4 from "../covers/back4.jpg";
import back5 from "../covers/back5.jpg";
import back6 from "../covers/back6.jpg";

export default function NoteList({
  note,
  handleDeleteNote,
  handleReadPageChange,
  readNoteDefault,
}) {
  function noteStyle() {
    let path;
    switch (note.style.image) {
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
    return {
      backgroundImage: `url(${path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: note.style.background,
      color: note.style.color,
    };
  }

  const noteTitle = note.title === "" ? "Untitle" : note.title;

  return (
    <div className="list" style={noteStyle()}>
      <div onClick={() => handleReadPageChange("readNoteForm", note.id)}>
        <p className="noteTitle">{noteTitle}</p>
        <p
          className="noteText"
          style={{ fontSize: note.style.fontSize + "px" }}
        >
          {note.note.substring(0, 170)}...
        </p>
      </div>
      <div className="noteFooter">
        <p className="noteDate">{note.date}</p>
        <div className="tra-def">
          <p
            className="def"
            style={{
              border: `1px solid  ${note.style.color}`,
            }}
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
