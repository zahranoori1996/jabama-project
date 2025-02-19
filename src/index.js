import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter as Router } from 'react-router-dom'
import HouseContextProvider from './components/HouseContext.js'

createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
  <Router>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>
  </HouseContextProvider>
  ,
)