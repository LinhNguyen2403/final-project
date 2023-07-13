import { useState } from "react";
import "./Calculator.css";

function App() {
  const [input, setInputValue] = useState("");
  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const addToButton = (value) => {
    setInputValue(input + value);
    setCurrentNumber(input + value);
  };
  const clearInput = () => {
    setInputValue("");
    setPreviousNumber("");
    setCurrentNumber("");
    setOperator("");
    setResult("");
  };
  const clickCEButton = () => {
    setOperator("");
    setResult("");
  };

  const delInput = () => setInputValue(input.slice(0, -1));

  const plus = () => {
    if (operator != "" && input == "") {
      setOperator("+");
    } else if (operator != "") {
      evaluate();
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("+");
    } else {
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("+");
    }
  };
  const subtract = () => {
    if (operator != "" && input == "") {
      setOperator("-");
    } else if (operator != "") {
      evaluate();
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("-");
    } else {
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("-");
    }
  };
  const multi = () => {
    if (operator != "" && input == "") {
      setOperator("x");
    } else if (operator != "") {
      evaluate();
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("x");
    } else {
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("x");
    }
  };
  const division = () => {
    if (operator != "" && input == "") {
      setOperator("+");
    } else if (operator != "") {
      evaluate();
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("/");
    } else {
      setPreviousNumber(currentNumber);
      setInputValue("");
      setOperator("/");
    }
  };

  const evaluate = () => {
    if (operator === "+") {
      setResult(Number(previousNumber) + Number(currentNumber));
      setCurrentNumber(Number(previousNumber) + Number(currentNumber));
      setInputValue("");
      setOperator("");
    }
    if (operator === "-") {
      setResult(Number(previousNumber) - Number(currentNumber));
      setCurrentNumber(Number(previousNumber) - Number(currentNumber));
      setInputValue("");
      setOperator("");
    }
    if (operator === "x") {
      setResult(Number(previousNumber) * Number(currentNumber));
      setCurrentNumber(Number(previousNumber) * Number(currentNumber));
      setInputValue("");
      setOperator("");
    }
    if (operator === "/") {
      if(currentNumber!=0){
        setResult(Number(previousNumber) / Number(currentNumber));
        setCurrentNumber(Number(previousNumber) / Number(currentNumber));
        setInputValue("");
        setOperator("");
      }
    }
  };

  return (
    <div className="cal-containor">
      <div className="calculator">
        <div className="input-calculator">
          <div
            className="displayInput-cal"
            onChange={(value) => setInputValue(value)}
            value={input}
          >
            {input}
          </div>
          <div className="displayResult-cal">{result}</div>
        </div>

        <div className="Keyboard">
          <button onClick={() => clickCEButton()}>CE</button>
          <button onClick={() => delInput()}>Del</button>
          <button onClick={() => clearInput()}>Clear</button>
          <button className="operatorInput active" onClick={() => division()}>/</button>
          <button onClick={() => addToButton(9)}>9</button>
          <button onClick={() => addToButton(8)}>8</button>
          <button onClick={() => addToButton(7)}>7</button>
          <button className="operatorInput" onClick={() => multi()}>x</button>
          <button onClick={() => addToButton(6)}>6</button>
          <button onClick={() => addToButton(5)}>5</button>
          <button onClick={() => addToButton(4)}>4</button>
          <button className="operatorInput" onClick={() => subtract()}>-</button>
          <button onClick={() => addToButton(3)}>3</button>
          <button onClick={() => addToButton(2)}>2</button>
          <button onClick={() => addToButton(1)}>1</button>
          <button className="operatorInput" onClick={() => plus()}>+</button>
          <button className="lastButtons" onClick={() => addToButton(0)}>0</button>
          <button onClick={() => evaluate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
