import React from "react";

export default function FontSizeOption({
  fontSize,
  selectedNote,
  defaultStyle,
  formSwitch,
  handleNoteFontSizeChange,
}) {
  let fontActive = "";
  function readNoteFontSize() {
    const activeFontSize = selectedNote && selectedNote.style.fontSize;
    fontActive = activeFontSize;
  }

  function addNoteFontSize() {
    const activeFontSize = defaultStyle && defaultStyle.fontSize;
    fontActive = activeFontSize;
  }
  formSwitch === "readNoteForm" ? readNoteFontSize() : addNoteFontSize();
  return (
    <div className="font">
      <input
        type="range"
        min={fontSize.min}
        max={fontSize.max}
        value={fontActive}
        onChange={(e) =>
          handleNoteFontSizeChange(
            selectedNote && selectedNote.id,
            e.target.value
          )
        }
      />
      <span>{fontActive} px</span>
    </div>
  );
}
