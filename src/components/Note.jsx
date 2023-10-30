import React from "react";
import { useRef } from "react";
export default function Note({ handlePageChange, handleSaveNote }) {
  const date = new Date();
  const titleRef = useRef();
  const noteRef = useRef();
  function handleNoteText() {
    handlePageChange();
    const title =
      titleRef.current.value === "" ? "Untitle" : titleRef.current.value;
    const note =
      noteRef.current.value === "" ? "Add your note..." : noteRef.current.value;
    handleSaveNote({ note, title });
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
