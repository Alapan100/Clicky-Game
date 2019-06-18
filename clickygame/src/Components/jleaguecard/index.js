import React from "react";
import "./style.css";

function Jleaguecard(props) {
  return (
    <div className="card" onClick={() => props.onClick(props.character)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body content">
        
          <p>
            <strong>Name:</strong> {props.name}
          </p>
      </div>
    </div>
  );
}

export default Jleaguecard;
