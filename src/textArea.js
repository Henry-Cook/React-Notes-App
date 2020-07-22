import React, { useState } from "react";

function TextArea() {
  const handleChange = (e) => {
    updateChange(e.target.value);
  };

  const noteInput = (
    <div className="flex flex-col  items-center">
      <textarea
        onChange={handleChange}
        className="m-1 rounded"
        name="noteArea"
        rows="10"
        cols="80"
      ></textarea>
      <button
        className="bg-yellow-500 m-1 w-1/5 rounded hover:bg-yellow-400"
        type="submit"
      >
        Add Note
      </button>
    </div>
  );

  const [note, updateNote] = useState(noteInput);
  const [change, updateChange] = useState("");
  const setNote = (e) => {
    e.preventDefault();
    updateNote(<p>{change}</p>);
    console.log(note);
  };

  return (
    <div>
      <form onSubmit={setNote}>{note}</form>
    </div>
  );
}

export default TextArea;
