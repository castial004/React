import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '1234567890'
    if (charAllowed) str += '!@#$%^&*()~`-=_+\\|<>,.?/:";'
    for (let i = 1; i <= length; i++) {
      let char = Math.round(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <div id='main' className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 id='h1' className="text-3xl font-bold mb-6 text-gray-800">Password generator</h1>
      
      <div id='text' className="flex items-center space-x-2 mb-4 w-full max-w-md">
        <input 
          type='text' 
          value={password} 
          readOnly 
          placeholder='random password' 
          className="flex-grow px-4 py-2 border rounded-md bg-white text-gray-800"
        />
        <button 
          id='copybtn' 
          onClick={() => { console.log({ password }) }} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      <div className="space-y-4 w-full max-w-md">
        <div>
          <input 
            type='range' 
            min={8} 
            max={16} 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
          <label className="ml-2 text-gray-700">Length: {length}</label>
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type='checkbox' 
            defaultChecked={numberAllowed} 
            onChange={() => setnumberAllowed(prev => !prev)}
            className="w-4 h-4"
          />
          <label className="text-gray-700">Number</label>
        </div>

        <div className="flex items-center space-x-2">
          <input 
            type='checkbox' 
            defaultChecked={charAllowed} 
            onChange={() => setcharAllowed(prev => !prev)}
            className="w-4 h-4"
          />
          <label className="text-gray-700">Special character</label>
        </div>
      </div>
    </div>
  )
}

export default App
