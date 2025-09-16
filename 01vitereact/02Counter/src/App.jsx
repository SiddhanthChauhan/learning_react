import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);

  const addValue = () => {
    // counter = counter+1;
    if(counter<20){
      setCounter(counter+1);
    }
    
  }
  const decrementValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>The greatest Counter the world has ever seen🌏!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Count</button>
      <br />
      <button onClick={decrementValue}>Decrease Count</button>
      {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
