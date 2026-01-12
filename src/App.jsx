import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './home-page/home.jsx'
import Login from './Login.jsx'
import Signup from './signup.jsx'

function App() {
  return (
    <div className="app">
      <main style={{ paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
