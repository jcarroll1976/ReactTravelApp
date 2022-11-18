import React from 'react';
import "./Selects.css";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import SelectsImage from './SelectsImage';


function Selects() {
  return (
    <div name="views" className="selects">
        <div className="container">
        <SelectsImage bgImage={BoraBora} text="Bora Bora" />
        <SelectsImage bgImage={BoraBora2} text="Emerald Bay" />
        <SelectsImage bgImage={Maldives} text="Maldives" />
        <SelectsImage bgImage={Maldives2} text="Grenada" />
        <SelectsImage bgImage={Maldives3} text="Barbados" />
        <SelectsImage bgImage={KeyWest} text="Key West" />
        </div>
        
    </div>
  )
}

export default Selects