import React, { useState } from "react";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import Fab from "@mui/material/Fab";

function UserAuth({ userAutho }) {
  const [userInfo, setUserInfo] = useState("");

  function useNamehandler(e) {
    const value = e.target.value;
    setUserInfo(value);
  }

  function userCheck() {
    userAutho(userInfo);
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={useNamehandler}
          type="text"
          placeholder="Enter your name"
          value={userInfo}
        />
        <Fab aria-label="add" onClick={userCheck}>
          <LoginRoundedIcon />
        </Fab>
      </form>
    </div>
  );
}

export default UserAuth;
