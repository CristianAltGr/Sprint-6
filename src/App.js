import React from "react";
import './App.css';
import Text from './components/scene/scene';
import { GlobalStyle } from "./components/scene/styles";


function App() {

  return(
    <>
      <GlobalStyle/>
      <>
      <Text className= "textSty"param = {0} ></Text>
      <Text param = {1} ></Text>
      <Text param = {2} ></Text>
      <Text param = {3} ></Text>
      </> 
    </>
  )
}

export default App;
