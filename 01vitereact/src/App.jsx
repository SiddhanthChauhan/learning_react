
import { useState } from "react";


function App() {
  const username = "Babushka"
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Hello World | Sid | I also learnt how to clean the project by deleting files not required at this stage</h1>
      <p>This is {username}</p>
      {/* The expression inside '{}' is termed as evaluated expression. You cannot write JS logic such as if else
      inside this as there are certain attributes that are defined when you render the app
      using react which doesnt support this */}
      
    </>
  )
}

export default App
