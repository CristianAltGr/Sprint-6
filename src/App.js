import React from "react";
import './App.css';
import Text from './components/scene/scene';
import TextS from './components/scene/styles';

function App() {

  return(
    <>
      <Text className= "textSty"param = {0} ></Text>
      <Text param = {1} ></Text>
      <Text param = {2} ></Text>
      <TextS param = {3} ></TextS> 
    </>
  )
}

export default App;
