import { useState } from "react";
import ChessBoard from "../ChessBoard/ChessBoard";
import "./Input.css";
import { SettingFilled } from "@ant-design/icons";
function Input() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(5);
  const [colorEven, setColorEven] = useState("#000000");
  const [colorOdd, setColorOdd] = useState("#ffc0cb");
  const [isShown, setIsShown] = useState(true);

  function getSize(e) {
    setValue(Number(e.target.value));
    console.log(value);
  }
  function getColorEven(c) {
    setColorEven(c.target.value);
  }
  function getColorOdd(c) {
    setColorOdd(c.target.value);
  }
  function changeColor() {
    let temp = colorEven;
    setColorEven(colorOdd);
    setColorOdd(temp);
  }
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <button type="button" onClick={()=>handleClick()}>
        <SettingFilled spin />
      </button>
      {!isShown ? (
        <>
          <div className="input">
            <div>
              <label>Flexible Size</label>
              <input onChange={getSize} type="number" />
            </div>
            <div>
              <label>Set Color 1</label>
              <input type="color" value={colorOdd} onChange={getColorEven} />
            </div>
            <div>
              <label>Set Color 1</label>
              <input value={colorEven} type="color" onChange={getColorOdd} />
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
        <div onClick={changeColor}>
            <ChessBoard
              size={value}
              colorEven={colorEven}
              colorOdd={colorOdd}
            />
        </div>
    </>
  );
}
export default Input;
