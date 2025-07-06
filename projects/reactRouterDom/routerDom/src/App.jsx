import { useState } from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Aboutus from './components/aboutUs'
import Contact from './components/contact'
import './App.css'

function App() {

  return (
  <BrowserRouter>
    <div style={{backgroundColor:'#212121',color:'white',height:'100vh',left:0,top:0,position:'relative'} }> 
      <nav style={{display:'flex', justifyContent:'center'}}>
        <ul style={{display:'flex',gap:'30px', listStyle:'none'}}>
          <li>
            <Link to='/'> Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
