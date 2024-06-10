import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue =() =>{
    //console.log("added value", Math.random())
    if(counter<25){
    counter= counter + 1;
    // counter= counter + 1;
    // counter= counter + 1;
    // counter= counter + 1;
    // counter= counter + 1;
    // counter= counter + 1;
    //it will gives answer of 16 because of useState it sens in a badge updating same counter  
    setCounter(counter) }
  }
  const removeValue=()=>{
    if(counter>0){
      counter= counter - 1;
      setCounter(counter) }
   
  }

  return (
    <>
      
      <h1>chai or react</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
      
    </>
  )
}

export default App
