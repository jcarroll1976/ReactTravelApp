import React from 'react';
import "./SelectsImage.css";

function SelectsImage({bgImage,text}) {
  return (
    <div className="selects-location">
        <img src={bgImage} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SelectsImage