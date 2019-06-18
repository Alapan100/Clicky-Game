import React from "react";
import { tsPropertySignature } from "@babel/types";

function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark text-light bg-dark justify-content-between">
      <a className="navbar-brand" href="/">
       Justice League Clicky Game
      </a>
      <div class="navbar-nav">
            <span className="navbar-brand">Current Score: {props.score} | Top-Score: {props.topScore}</span>
          </div>
    </nav>
  );
}

export default Nav;   
