import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color,setColor] = useState("gray")
  //Note: On refreshing the page, page bg color defaults to gray as that is the initial state value

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white padding px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}
          //Note: Here you could have passed setColor directly as a function but since "Onclick" requires
          //a function to be passed, we wrap it in an arrow function as otherwise we would'nt be changing to requires colors
          onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
