import { useState } from "react";
import ChessBoard from "../ChessBoard/ChessBoard";
import "./Input.css";
import { SettingFilled } from "@ant-design/icons";
import { Button,Modal } from "antd";
function Input() {
  const [value, setValue] = useState(5);
  const [colorEven, setColorEven] = useState("#000000");
  const [colorOdd, setColorOdd] = useState("#ffc0cb");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  function showModal(){
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOK = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Button type="text" onClick={()=>showModal()} icon={<SettingFilled/>}/>
      <Modal
        open={isModalOpen}
        onOk={() => handleOK()}
        onCancel={() => handleCancel()}
      >
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
      </Modal>
      <div onClick={changeColor}>
        <ChessBoard size={value} colorEven={colorEven} colorOdd={colorOdd} />
      </div>
    </>
  );
}
export default Input;
