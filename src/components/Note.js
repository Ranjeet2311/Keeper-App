import React from "react";
import Fab from "@mui/material/Fab";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
function Note({ note, id, deleteingNote }) {
  function deleteHandler() {
    console.log("Delete Triggered");
    deleteingNote(id);
  }

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <hr />
      <p>{note.content}</p>
      <Fab onClick={deleteHandler}>
        <DeleteRoundedIcon />
      </Fab>
    </div>
  );
}

export default Note;
