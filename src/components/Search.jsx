import React from "react";

export default function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <span>&</span>
      <input
        type="search"
        placeholder="Search Note..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
}
