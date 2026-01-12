import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home-page/home.jsx'
import Login from './Login.jsx'
import Signup from './signup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <Login/> */}
   <Signup/>
  </StrictMode>,
)
