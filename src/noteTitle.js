import React, { useState } from "react";

function NoteTitle() {
  const handleChange = (e) => {
    updateChange(e.target.value);
  };

  const titleInput = (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type Your Title Here"
        className="rounded"
      />
      <button
        className="bg-yellow-500 w-20 m-2 rounded hover:bg-yellow-400"
        type="submit"
      >
        Add Title
      </button>
    </div>
  );

  const [title, updateTitle] = useState(titleInput);
  const [change, updateChange] = useState("");

  const setTitle = (e) => {
    e.preventDefault();
    updateTitle(change);
  };

  return (
    <div>
      <form onSubmit={setTitle}>{title}</form>
    </div>
  );
}

export default NoteTitle;
