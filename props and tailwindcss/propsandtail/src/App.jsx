import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamInfo from './component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamInfo username="sahil" about="hi i am sahil"/>
      <TeamInfo username="sagar" about="hi i am sagar"/>
    </>
  )
}

export default App
