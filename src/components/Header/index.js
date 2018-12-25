import React from "react";
import "./header.css";

function Header({activeUser}) {
  const { name, status } = activeUser;
  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
}

export default Header;