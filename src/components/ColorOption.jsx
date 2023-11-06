import React from "react";
export default function ColorOption({
  colorValue,
  handleNoteColorChange,
  selectedNote,
  defaultStyle,
  formSwitch,
}) {
  let colActive = "";
  function readNoteActiveColor() {
    const activeColor = selectedNote && selectedNote.style.color;
    if (activeColor) {
      if (activeColor === colorValue.value) {
        colActive = "active";
      } else {
        colActive = "";
      }
    }
  }
  function addNoteActiveColor() {
    const activeColor = defaultStyle && defaultStyle.color;
    if (activeColor) {
      if (activeColor === colorValue.value) {
        colActive = "active";
      } else {
        colActive = "";
      }
    }
  }
  formSwitch === "readNoteForm" ? readNoteActiveColor() : addNoteActiveColor();
  return colorValue.name !== "box" ? (
    <input
      type="text"
      readOnly={true}
      value={colorValue.value}
      className={`${colorValue.name} ${colActive}`}
      onClick={() =>
        handleNoteColorChange(
          selectedNote && selectedNote.id,
          colorValue.id,
          colorValue.value
        )
      }
    />
  ) : (
    <input
      type="color"
      className={colActive}
      onChange={(e) => {
        handleNoteColorChange(
          selectedNote && selectedNote.id,
          colorValue.id,
          e.target.value
        );
      }}
    />
  );
}
