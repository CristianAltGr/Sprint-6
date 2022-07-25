import React,{useState,useEffect} from "react";
import './App.css';
import { adventure } from "./components/scene/scene";
import Text from './components/scene/scene';
import { Buttons } from "./components/scene/styles";
import Button from './components/scene/button';
import { GlobalStyle } from "./components/scene/styles";
import Welcome from "./components/Welcome";


function App() {

  const [count,setCount] =useState(0);
  const [cond0,setCond0] =useState(true);
  const [cond1,setCond1] =useState(false);
  const [cond2,setCond2] =useState(false);
  const [cond3,setCond3] =useState(false);
  
  const reduce = () =>{
    count > 0 ? setCount(count-1) : alert("L'historia tot comença!");
  }

  const plus = () => {
    count < 3 ? setCount(count+1) : alert("L'historia ha acabat!"); 
  }

  useEffect(() => {
    
    switch(count){
      case 0: setCond0(true); setCond1(false); setCond2(false); setCond3(false); 
        break;
      case 1: setCond0(false); setCond1(true); setCond2(false); setCond3(false);
        break;
      case 2: setCond0(false); setCond1(false); setCond2(true); setCond3(false);
        break;
      case 3: setCond0(false); setCond1(false); setCond2(false); setCond3(true);
        break;
      default: alert("broke");
    }
  },[count]);

  return(
    <>
      <GlobalStyle bg = {adventure[count].img}/>
      <Welcome/>
      <Buttons>
        <Button text="Anterior" onClick= {reduce}></Button>
        <Button text="Següent"  onClick= {plus}></Button>
      </Buttons>
      <>
        <Text id={0} actived={cond0}></Text>
        <Text id={1} actived={cond1}></Text>
        <Text id={2} actived={cond2}></Text>
        <Text id={3} actived={cond3}></Text>
      </>      
    </>
  )
}

export default App;
