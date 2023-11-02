import React from "react";
import { useRef } from "react";

export default function Note({ handleAddPageChange, handleSaveNote }) {
  const titleRef = useRef();
  const noteRef = useRef();
  const date = new Date();

  function handleNoteText() {
    handleAddPageChange("addNoteForm");
    const title =
      titleRef.current.value === "" ? "Untitle" : titleRef.current.value;
    const note =
      noteRef.current.value === "" ? "Add your note..." : noteRef.current.value;
    handleSaveNote({ note, title });
    titleRef.current.value = "";
    noteRef.current.value = "";
  }
  return (
    <div className="text-area">
      <p className="back" onClick={handleNoteText}>
        &#8592;
      </p>
      <div className="title">
        <input type="text" placeholder="Title" ref={titleRef} />
      </div>
      <div className="date">
        <p>{date.toLocaleDateString()}</p>
      </div>
      <div className="note">
        <textarea placeholder="Write your note..." ref={noteRef}></textarea>
      </div>
    </div>
  );
}
