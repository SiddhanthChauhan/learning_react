import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //useCallback ensures that React reuses the same function reference unless the dependencies change.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) string += "0123456789"
    if (characterAllowed) string += "!@#$%^&*()~`<>?,./|{}[]"
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * string.length + 1)
      // pass+=string.charAt(charIndex)
      pass += string.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99) //to specify range for copy
    window.navigator.clipboard.writeText(password)
  },[password])
  //Why use useCallback here?
// Because you are passing these functions (passwordGenerator) as dependencies to useEffect.
// If you didn’t use useCallback, React would think the function is “new” on every render → useEffect would run infinitely.

  //useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, characterAllowed, passwordGenerator])
  //whenever length, numberAllowed, characterAllowed, or passwordGenerator change → run passwordGenerator() again.
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 bg-gray-100'
            placeholder='Password' readOnly 
            ref={passwordRef}
            />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>
            copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}

            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((char) => !char);
              }}
            />
            <label htmlFor='characterInput'>Symbols</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
