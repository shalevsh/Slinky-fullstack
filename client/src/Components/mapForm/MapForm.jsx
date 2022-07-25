import React, { useState } from "react";
import "./mapForm.css";


const MapForm = () => {
  const [availible, setAvailible] = useState(true);


  const func = async (e) => {

  };

  return (
    <div className="map-center">
      <h1>map</h1>
      <div id="mapBackGround"> 
      <button class="btn" id="c1">c1</button>
      <button class="btn"id="c2">c2</button>
      <button class="btn"id="c3">c3</button>
      <button class="btn"id="c4">c4</button>
      <button class="btn"id="c5">c5</button>
      <button class="btn"id="c6">c6</button>
      <button class="btn"id="c7">c7</button>
      <button class="btn"id="c8">c8</button>
  

      </div>
      </div>

  );
};

export default MapForm;
