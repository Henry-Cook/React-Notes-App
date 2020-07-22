import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Note from "./note";

function App() {
  const [newNote, updateNewNote] = useState([]);

  const addNote = () => {
    return updateNewNote(newNote.concat(<Note />));
  };

  return (
    <div>
      <Navbar click={addNote} />
      <div className="containerxl flex flex-col items-center">{newNote}</div>
    </div>
  );
}

export default App;
