import React from "react";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

function Header({ usename }) {
  return (
    <header>
      <h1>
        Keeper <NoteAltRoundedIcon /> ...
      </h1>
      <p>
        <PersonRoundedIcon /> {usename}
      </p>
    </header>
  );
}

export default Header;
