import React from "react";
export default function BackgroundOption({
  backgroundValue,
  defaultStyle,
  selectedNote,
  handleNoteBackgroundChange,
  formSwitch,
}) {
  let backgroundActive = "";
  function readNoteActiveBackgroundColor() {
    const activeBackground = selectedNote && selectedNote.style.background;
    if (activeBackground) {
      if (activeBackground === backgroundValue.value) {
        backgroundActive = "active";
      } else {
        backgroundActive = "";
      }
    }
  }
  function addNoteActiveBackgroundColor() {
    const activeColor = defaultStyle && defaultStyle.background;
    if (activeColor) {
      if (activeColor === backgroundValue.value) {
        backgroundActive = "active";
      } else {
        backgroundActive = "";
      }
    }
  }
  formSwitch === "readNoteForm"
    ? readNoteActiveBackgroundColor()
    : addNoteActiveBackgroundColor();
  return backgroundValue.name !== "box" ? (
    <input
      type="text"
      className={`${backgroundValue.name} ${backgroundActive}`}
      readOnly
      value={backgroundValue.value}
      onClick={() =>
        handleNoteBackgroundChange(
          selectedNote && selectedNote.id,
          backgroundValue.id,
          backgroundValue.value
        )
      }
    />
  ) : (
    <input
      type="color"
      className={`${backgroundActive}`}
      onChange={(e) =>
        handleNoteBackgroundChange(
          selectedNote && selectedNote.id,
          backgroundValue.id,
          e.target.value
        )
      }
    />
  );
}
