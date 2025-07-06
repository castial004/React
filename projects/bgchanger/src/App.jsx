import './App.css'
import { useState } from 'react'
function App() {
  let [color,setColor] = useState('olive')
  function changebg(newcolor){
    setColor(newcolor)
  }
  return (
    <>
      <div className="main" style={{backgroundColor:color}}>
        <div className='buttons'>
          <button style={{backgroundColor:'red'}} onClick={()=>{
            setColor('red')
            }}>red</button>
          <button style={{backgroundColor:'green'}} onClick={()=>{
            setColor('green')
          }}>green</button>
          <button style={{backgroundColor:'yellow'}}onClick={()=>{
            setColor('yellow')
          }}>yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
