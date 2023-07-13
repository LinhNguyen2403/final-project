import { useEffect, useState } from "react";
import "./Pomodoro.css";
import { Button, Space, InputNumber } from "antd";

function App() {
  const [now, setNow] = useState(new Date());
  const [inputWorkTime, setInputWorkTime]=useState(15);
  const [inputBreakTime, setInputBreakTime]=useState(15);
  const [inputLongBreak, setInputLongTime]=useState(15);

  const [mode, setMode] = useState("Working");
  const [count, setCount] = useState(inputWorkTime);

  const [pause, setPause] = useState(true);
  // current time on display
  useEffect(()=>{
    console.log(inputWorkTime," ",inputBreakTime," ",inputLongBreak )
    
    if(mode === "Working")setCount(inputWorkTime);
    if(mode === "Short-Break")setCount(inputBreakTime);
    if(mode === "Long-break")setCount(inputLongBreak);
  },[inputWorkTime,inputBreakTime, inputLongBreak])

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);

  // mode time counting

  useEffect(() => {
      const countDown = setInterval(() => {
        if(!pause){
        if (count > 0) {
          setCount(count - 1);
        } else {
          if (mode === "Working") {
            setCount(ellapseShortBreak);
            setMode("Relaxing");
            setPause(!pause)
          } else {
            setCount(ellapsWorkingTime);
            setMode("Working");
            setPause(!pause)
          }
        }
      }
      }, 1000);
    return () =>{ clearInterval(countDown)}
  }, [pause, count, ellapseShortBreak, ellapsWorkingTime, mode]);
  const styleObj = {
    backgroundColor: "pink",
  };

  const styleObj1 = {
    backgroundColor: "#c9e9f6",
  };

  return (
    <div className="container" style={mode == "Working" ? styleObj : styleObj1}>
      <Space.Compact
        direction="vertical"
        style={{ alignItems: "center", border: "solid" }}
      >
        <></>
        <div>{now.toLocaleTimeString()}</div>
        <div>
          <Button style={{ background: "transparent" }}>Pomodoro{mode}</Button>
          <Button style={{ background: "transparent" }}>
            ShortBreak{mode}
          </Button>
          <Button style={{ background: "transparent" }}>LongBreak{mode}</Button>
        </div>
        <div className="time" style={{ width: 300, textAlign: "center" }}>
          {count}
        </div>
        <Button
          style={{ background: "transparent", fontSize: 40, height: 70 }}
          onClick={()=>setPause(!pause)}
        >
          {pause?'START':'PAUSE'}
        </Button>
        <InputNumber onChange={(value)=>setInputWorkTime(value)} value={inputWorkTime}></InputNumber>
        <InputNumber onChange={(value)=>setInputBreakTime(value)} value={inputBreakTime}></InputNumber>
        <InputNumber onChange={(value)=>setInputLongTime(value)} value={inputLongBreak}></InputNumber>


      </Space.Compact>
    </div>
  );
}

export default App;
