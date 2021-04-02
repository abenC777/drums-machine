import React, { useEffect } from "react";
import "./DrumPad.css";

export default function DrumPad(props) {
  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
  };

  const handleClick = (e) => {
    playSound();
    props.onChangeDisplay(props.id);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return function cleanup() {
      document.removeEventListener("keydown", handleKey);
    };
  });

  const handleKey = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
      props.onChangeDisplay(props.id);
      console.log(e);
    }
  };

  return (
    <div id="drum-pad" className="drum-pad" onClick={handleClick}>
      <p>{props.keyTrigger}</p>
      <audio src={props.url} id={props.keyTrigger} className="clip"></audio>
    </div>
  );
}
