import React, { useState } from "react";
import "./index.css";

function Figura() {
  const [inpValue, setInpValue] = useState("");
  const [num, setNum] = useState("");

  function handleCLick() {
    const number = parseInt(inpValue, 10);

    if (number === 3) {
      setNum("Uchburchak");
    } else if (number === 4) {
      setNum("To'rtburchak");
    } else if (number === 5) {
      setNum("Beshburchak");
    } else {
      setNum("Bunday shakl topilmadi");
    }
  }

  return (
    <div className="figura">
      <h3>Figura</h3>

      <input
        className="inp"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        type="number"
        placeholder="Enter number"
      />
      <button className="button2" onClick={handleCLick}>Correct</button>

      {num && <p className="text-center">{num}</p>}
    </div>
  );
}

export default Figura;