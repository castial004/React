import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App
