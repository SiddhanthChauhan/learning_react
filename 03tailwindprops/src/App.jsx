import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  let myObj = {
    name: "sid",
    channel: "codevolution"
  }

  let newArr = [1,2,3]
  
  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="sid" btnText="click me"/>
      <Card username="ruj"/>


    </>
  )
}

export default App
