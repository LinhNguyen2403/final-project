import { useState } from "react";
import "./ConvertRate.css";
import { Icon } from "@iconify/react";
import { InputNumber, Space, Select, Button, Form } from "antd";
// import
function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [unitFrom, setUnitFrom] = useState("VND");
  const [unitConvert, setUnitConvert] = useState("USD");

  const rates2USD = {
    VND: 1 / 23600,
    USD: 1,
    EUR: 1.096,
  };

  function getInput(value) {
    setInput(value);
  }
  function getOutputValue(input, exchangeRate) {
    return input * exchangeRate;
  }
  function getUSDRate(money) {
    return rates2USD[money];

  }
  function getExchangeRate(inMoney, outMoney) {
    // inMoney ==> inMoneyUSD ; outMoney ==> outMoneyUSD
    let inMoneyUSD = getUSDRate(inMoney);
    let outMoneyUSD = getUSDRate(outMoney);
    return outMoneyUSD / inMoneyUSD;
  }

  function handleClickConvert() {
    setUnitFrom(unitConvert);
    setUnitConvert(unitFrom);
    let output = getOutputValue(input,
      getExchangeRate(unitFrom, unitConvert)
    );
    setOutput(output);
  }
  return (
    <Form layout="verical" style={{minWidth: 500, display:'flex', justifyContent: 'center', alignContent:"center"}}>
        <Space direction="vertical" style={{backgroundColor:"#ffc0cb", borderRadius:10, padding:20}}>
          <Space style={{ width: "100%", display:'flex', justifyContent:'center', alignItems:"end" }}>
            <div className="block" style={{size: 100}}>
              <div className="block-label">Amount</div>
              <InputNumber min="0" onChange={getInput} value={input} style={{width:200}}/>
            </div>
            <div className="block">
              <div className="block-label">From</div>
              <div>
                <Select
                  defaultValue={unitFrom}
                  options={[
                    { label: "USD", value: "USD" },
                    { label: "VND", value: "VND" },
                    { label: "EUR", value: "EUR" },
                  ]}
                  onChange={(value) => {
                    setUnitFrom(value);
                  }}
                  value={unitFrom}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div>
                <Button icon={<Icon icon="uil:exchange" style={{ fontSize: 22, marginBottom:5 }}/>}
                  shape="circle" size="midle" onClick={() => handleClickConvert()} 
            />
            </div>
            <div className="block">
              <div className="block-label">To</div>
              <div>
                <Select
                  defaultValue={unitConvert}
                  options={[
                    { label: "USD", value: "USD" },
                    { label: "VND", value: "VND" },
                    { label: "EUR", value: "EUR" },
                  ]}
                  onChange={(value) => {
                    setUnitConvert(value);
                  }}
                  value={unitConvert}
                  style={{ width: "100%" }}
                >
                  <Space>{unitConvert}</Space>
                </Select>
              </div>
            </div>
          </Space>
          <Space direction="vertical" style={{display:'flex', justifyContent: 'center', alignContent:"center"}}>
            <Space style={{maxWidth: 300}} direction="vertical">
                <div>
                  <span>{input} {unitFrom} =</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: "bold" }}>
                  {output.toFixed(5)} {unitConvert}
                </div>
                Exchange Rate:
                <div> 
                  1 {unitFrom} = {getExchangeRate(unitConvert, unitFrom).toFixed(5)}{" "}
                  {unitConvert}
                </div>
                <div>
                  1 {unitConvert} = {getExchangeRate(unitFrom, unitConvert).toFixed(5)}{" "}
                  {unitFrom}
                </div>
            </Space>
          </Space>
        </Space>
    </Form>
  );
}

export default App;
