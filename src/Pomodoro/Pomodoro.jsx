import { useEffect, useState } from "react";
import { Button, Space, InputNumber,Modal,Tooltip } from "antd";
import {SettingFilled,RetweetOutlined} from "@ant-design/icons";
import "./Pomodoro.css";

function App() {
  const [now, setNow] = useState(new Date());
  const [inputWorking, setInputWorking]=useState(25);
  const [inputShortBreak, setInputShortBreak]=useState(3);
  const [inputLongBreak, setInputLongBreak]=useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("Working");
  const [minute, setMinute]=useState(inputWorking);
  const [second, setSecond]=useState(0);
  const [pause, setPause] = useState(true);
  const switchMode = <span>Switch Mode</span>;
  const setting = <span>Setting time</span>;


  // current time on display
  useEffect(()=>{
    if(mode === "Working")setMinute(inputWorking);
    if(mode === "Short-Break")setMinute(inputShortBreak);
    if(mode === "Long-Break")setMinute(inputLongBreak);
  },[inputWorking,inputShortBreak, inputLongBreak, mode])

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());
    }, 1000);
  }, [now]);

  // mode time counting

  useEffect(() => {
      const countDown = setInterval(() => {
        if (!pause) {
          if (minute > 0) {
            if (second == 0) {
              setMinute(minute - 1);
              setSecond(59);
            } else {
              setSecond(second - 1);
            }
          } else {
            if (mode === "Working") {
              setMinute(inputShortBreak);
              setSecond(0);
              setMode("Short-Break");
              setPause(!pause);
              
            } else if (mode === "Short-Break") {
              setMinute(inputLongBreak);
              setSecond(0);
              setMode("Long-Break");
              setPause(!pause);
            } else {
              setMinute(inputWorking);
              setSecond(0);
              setMode("Working");
              setPause(!pause);
            }
          }
        }
      }, 1000);
    return () =>{ clearInterval(countDown)}
  }, [pause, minute,second , inputShortBreak, inputLongBreak,inputWorking, mode]);
  function showModal(){
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
    setInputShortBreak(3);
    setInputLongBreak(10);
  };
  const handleOK = () => {
    setIsModalOpen(false);
    setInputWorking(inputWorking)
    setInputShortBreak(inputShortBreak);
    setInputLongBreak(inputLongBreak);
  };

  return (
    <div >
    <div style={{display:"flex", justifyContent:"center",
    backgroundColor: mode == "Working" ? "pink" : (mode=="Short-Break"?"#c9e9f6":"#80b280"),
    height:'100vh', alignItems:"center" }}>
      <Space
        direction="vertical"
        style={{ alignItems: "center", borderRadius:10,
        backgroundColor: `rgba(240, 240, 240, 0.2)`, height:300,
        position: 'relative'}}
      >
        <Tooltip placement="rightTop" title={setting  }>
             <Button type="text" onClick={()=>showModal()} icon={<SettingFilled/>} style={{position: 'absolute', right:0}}/>
        </Tooltip>
        <Space style={{fontWeight:"bold"}}>CURRENT TIME:{now.toLocaleTimeString()}</Space>
        <div >
            <Button style={{ background: 'transparent'}} onClick={()=>{
                            setMode('Working');
                            setSecond(0);
                            setMinute(inputWorking);
                            }} type="text">Pomodoro</Button>
            <Button style={{ background: 'transparent'}} onClick={()=>{
                            setMode('Short-Break');
                            setSecond(0);
                            setMinute(inputShortBreak);
                            }} type="text"> Short Break</Button>
            <Button style={{ background: 'transparent'}} onClick={()=>{
                            setMode('Long-Break');
                            setSecond(0);
                            setMinute(inputLongBreak)}} type="text">Long Break</Button>
        </div>
        <div style={{ width: 300,height: 'fit-content', fontSize: 80, textAlign: "center",fontWeight:'bold'}}>
          {minute<10?`0${minute}`:minute}:{second<10?`0${second}`:second}</div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:100}}>
            <Button
              style={{fontSize:22,height: 'fit-content', color:'black'}}
              onClick={()=>setPause(!pause)}
            >{pause?'START':'PAUSE'}</Button>
            <Tooltip placement="rightTop" title={switchMode}>
                <Button icon={<RetweetOutlined />} style={{margin:10}} 
                onClick={()=>{setMode(mode=="Working"?"Short-Break":"Working");setSecond(0)}}></Button>
            </Tooltip>

        </div>
        <Modal open={isModalOpen} onOk={()=>handleOK()} onCancel={()=>handleCancel()}>
        <Space direction="vertical">
            <div style={{fontWeight:'bold'}}>Time (minutes)</div>
            <Space >
              <div>
                <div>Pomodoro</div>
                <InputNumber onChange={(value)=>setInputWorking(value)} value={inputWorking}></InputNumber>
              </div>
              <div>
                <div>Short Break</div>
                  <InputNumber onChange={(value)=>setInputShortBreak(value)} value={inputShortBreak}></InputNumber>
              </div>
              <div>
                <div>Long Break</div>
                <InputNumber onChange  ={(value)=>setInputLongBreak(value)} value={inputLongBreak}></InputNumber>
              </div>
            </Space>
        </Space>
        </Modal>
      </Space>
    </div>
    </div>
  )
}

export default App;
