import React, { useState } from "react";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import Fab from "@mui/material/Fab";

function CreateNote({ addOnClick }) {
  const [inputNote, setInputNote] = useState({ title: "", content: "" });
  const [expand, setExpand] = useState(false);

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);

    setInputNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (inputNote.title <= 0 && inputNote.content <= 0) {
      return alert("Please add some text");
    } else {
      addOnClick(inputNote);
    }

    setInputNote({ title: "", content: "" });
  }
  function expandNoteBox() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Title"
            name="title"
            value={inputNote.title}
          />
        )}

        <textarea
          onChange={inputChangeHandler}
          onClick={expandNoteBox}
          placeholder="Take a note..."
          name="content"
          rows="2"
          value={inputNote.content}></textarea>

        {expand && (
          <Fab type="submit" onClick={submitHandler}>
            <AddTaskRoundedIcon />
          </Fab>
        )}
      </form>
    </div>
  );
}

export default CreateNote;
