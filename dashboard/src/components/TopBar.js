import React from "react";

import Menu from "./Menu";

const TopBar = ({ user, logout }) => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <img
            src="Nav.png"
            alt="Nav image"
            style={{
              width: "7rem",
              height: "auto",
              lineHeight: "0",
            }}
          />
        </div>
        <div className="sensex">
          <h3>Trade Anytime</h3>
        </div>
      </div>

      <Menu user={user} logout={logout} />
    </div>
  );
};

export default TopBar;
