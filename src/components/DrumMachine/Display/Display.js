import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div id="display" className="display">
      {props.displayText}
    </div>
  );
}
