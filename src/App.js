import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import UserAuth from "./components/UserAuth";

function App() {
  const [notes, setNotes] = useState([]);
  const [usename, setUserName] = useState("");
  const [valid, setValid] = useState(false);

  function addNotes(notes) {
    setNotes((prevNotes) => {
      return [...prevNotes, notes];
    });
  }

  function deleteNotes(idFromNotes) {
    setNotes((preval) => {
      return preval.filter((noteItem, index) => {
        return index !== idFromNotes;
      });
    });
  }

  function userNameAdd(userInfo) {
    // setUserName(userInfo);
    setUserName((preValue) => {
      return [...preValue, userInfo];
    });

    setValid(true);
  }

  return (
    <div className="app">
      <Header usename={usename} />

      {valid ? (
        <div>
          <CreateNote addOnClick={addNotes} />

          {notes.map((note, index) => {
            return (
              <Note
                key={index}
                note={note}
                id={index}
                deleteingNote={deleteNotes}
              />
            );
          })}
        </div>
      ) : (
        <UserAuth userAutho={userNameAdd} />
      )}

      <Footer />
    </div>
  );
}

export default App;
