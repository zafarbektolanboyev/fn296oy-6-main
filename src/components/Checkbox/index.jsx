import React, { useState } from "react";
import "./index.css";

function Checkbox() {
  const [selectCheck, setSelectCheck] = useState([]);

  function handleCheckBox(e) {
    e.preventDefault();
    const { name, checked } = e.target;
    if (checked) {
      setSelectCheck([...selectCheck, name]);
    } else {
      setSelectCheck(selectCheck.filter((item) => item !== name));
    }
  }
  return (
    <div className="fruits  p-[15px]">
      <h3>Fruit</h3>
      <div className="flex flex-row gap-2">
        <form className="flex flex-row gap-[30px] flex-wrap">
          <div className="flex flex-row gap-[50px] border p-2">
            <div>
              <div>
                <input
                  name="olma"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Olma</span>
              </div>
              <div>
                <input
                  name="nok"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Nok</span>
              </div>
              <div>
                <input
                  name="olcha"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Olcha</span>
              </div>
              <div>
                <input
                  name="gilos"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Gilos</span>
              </div>
            </div>
            <div>
              <div>
                <input
                  name="banan"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Banan</span>
              </div>
              <div>
                <input
                  name="xurmo"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Xurmo</span>
              </div>
              <div>
                <input
                  name="mandarin"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Mandarin</span>
              </div>
              <div>
                <input
                  name="uzum"
                  onChange={handleCheckBox}
                  type="checkbox"
                />
                <span>Uzum</span>
              </div>
            </div>
          </div>
        </form>
        <div>
          <h3 className="mt-[-23px] p-[2]">Tanlanganlar</h3>
          {selectCheck.length > 0 &&
            selectCheck.map(function (el, index) {
              return(
                <div className="border p-1 flex flex-wrap">
                   <h5 key={index}>{el}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
