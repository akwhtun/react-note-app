import React from "react";

export default function BackgroundImageOption({
  backgroundImage,
  selectedNote,
  defaultStyle,
  formSwitch,
  handleBackgroundImageChange,
}) {
  let image = "";
  function readNoteImage() {
    const activeImage = selectedNote && selectedNote.style.image;
    if (activeImage) {
      if (activeImage === backgroundImage.value) {
        image = "active";
      } else {
        image = "";
      }
    }
  }
  function addNoteImage() {
    const activeImage = defaultStyle && defaultStyle.image;
    if (activeImage) {
      if (activeImage === backgroundImage.value) {
        image = "active";
      } else {
        image = "";
      }
    }
  }
  formSwitch === "readNoteForm" ? readNoteImage() : addNoteImage();
  return (
    <p
      className={`${backgroundImage.name} ${image}`}
      onClick={() =>
        handleBackgroundImageChange(
          selectedNote && selectedNote.id,
          backgroundImage.id,
          backgroundImage.value
        )
      }
    ></p>
  );
}
