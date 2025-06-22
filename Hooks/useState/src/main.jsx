import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sahil from './Sahil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sahil />
  </StrictMode>,
)
