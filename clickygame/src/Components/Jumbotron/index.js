import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
      <h1>Clicky Game</h1>
      <h4>Choose your superhero to save the world, but not twice!</h4>
    </div>
  );
}

export default Jumbotron;