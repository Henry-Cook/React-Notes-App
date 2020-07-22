import React from "react";
import NoteTitle from "./noteTitle";
import TextArea from "./textArea";

function Note() {
  return (
    <div className="rounded bg-orange-500 flex flex-col border border-orange-500 text-center m-5">
      <NoteTitle />
      <TextArea />
    </div>
  );
}

export default Note;
