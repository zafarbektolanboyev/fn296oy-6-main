import React, { useState } from "react";
import "./index.css";

function ColorCheck() {
  const [bgColor, setColor] = useState('red')

  function handleChangeColor(color){
    setColor(color)
  }
  return (
    <div className="color border border w-[400px]">
      <h3 className="text-center text-2xl">Color</h3>
      <div className="flex flex-row justify-between items-center">
        <form className="gap-2 flex-col">
          <label>
            <input type="radio" onChange={()=> handleChangeColor('red')} id="red" name="color" />
            <span>Red</span>
          </label>
          <label>
            <input type="radio" onChange={()=> handleChangeColor('greenyellow')} id="green" name="color" />
            <span>Green</span>
          </label>
          <label>
            <input type="radio" onChange={()=> handleChangeColor('blue')} id="blue" name="color" />
            <span>Blue</span>
          </label>
        </form>
        <div className="div" style={{backgroundColor: bgColor}}></div>
      </div>
    </div>
  );
}

export default ColorCheck;
