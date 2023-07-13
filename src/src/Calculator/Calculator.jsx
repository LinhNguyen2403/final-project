/* eslint-disable react/no-unknown-property */
import './Calculator.css'
import {useState} from 'react'
import Display from './Display'
import CalcButton from './CalcButton'
import { InputNumber } from "antd";

let operands = [];
let _operator = null;
function App() {
  const [displayValue , setDisplayValue] = useState("")
  const [displayResult, setDisplayResult] = useState("")
  function numberButtonClick(v) {
    setDisplayValue(`${displayValue}${v}`)
  }
  function evaluate(operands, operator) {
    if (operands.length < 2 || operator === null) {
      // eslint-disable-next-line no-undef
      throw new Error(`khoong du thong tin`);
    }
    switch(operator) {
      case '+':
        return operands[0] + operands[1];
      case '-':
        return operands[0] - operands[1];
      case '*':
        return operands[0] * operands[1];
      case '/':
        return operands[0] / operands[1];
    }
  }
  function signButtonClick() {
    let newValue = +displayValue * (-1);
    setDisplayValue(newValue);
  }
  function equalButtonClick() {
    operands.push(+displayValue);
    let result = evaluate(operands, _operator);
    operands.length = 0;
    operands.push(+result);
    setDisplayValue("");
    setDisplayResult(result);
  }
  function operatorButtonClick(operator) {
    console.log(operator)
    if (operands.length < 1) {
      _operator = operator;
      operands.push(+displayValue);
      setDisplayValue("")
    }
    else if (operands.length < 2) {
      operands.push(+displayValue);
      let result = evaluate(operands, _operator);
      operands.length = 0;
      operands.push(+result);
      _operator = operator;
      setDisplayValue("");
      setDisplayResult(result);
    }
    else {
      // eslint-disable-next-line no-undef
      throw new Error("Khong the xay ra")
    }
  }
  const buttons = [
    {value: 'AC', onClick: () => { 
      setDisplayValue("");
      setDisplayResult("");
      _operator = null;
      operands.length = 0;
    }}, 
    {value: 1, onClick: () => numberButtonClick(1)}, 
    {value: 2, onClick: () => numberButtonClick(2)}, 
    {value: "Back", label: '\u2190', onClick: () => setDisplayValue(`${displayValue}`.slice(0,-1))},
    {value: 3, onClick: () => numberButtonClick(3)}, 
    {value: 4, onClick: () => numberButtonClick(4)}, 
    {value: 5, onClick: () => numberButtonClick(5)}, 
    {value: "+", onClick: () => operatorButtonClick('+')},
    {value: 6, onClick: () => numberButtonClick(6)}, 
    {value: 7, onClick: () => numberButtonClick(7)}, 
    {value: 8, onClick: () => numberButtonClick(8)}, 
    {value: "-", onClick: () => operatorButtonClick('-')},
    {value: 9, onClick: () => numberButtonClick(9)}, 
    {value: 0, onClick: () => numberButtonClick(0)}, 
    {value: '+/-', onClick: signButtonClick}, 
    {value: "*", label: '\u00D7', onClick: () => operatorButtonClick('*')},
    {value: '=', weight: 3, onClick: equalButtonClick }, 
    {value: '/', label: "\u00F7", onClick: () => operatorButtonClick('/')}
  ]
  return (
    <div className='Calculator'>
      <Display value={displayValue} result={displayResult} />
      <div>{/* Buttons go here */
        buttons.map(
          (b, idx) => <CalcButton 
            key={idx} 
            value={b.value} 
            label={b.label}
            onClick={b.onClick}
            weight={b.weight} />
        )
      }</div>
    </div>
  )
}
export default App;
