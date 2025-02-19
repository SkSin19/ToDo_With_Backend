import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginPage.jsx';
import Register from './components/registerPage.jsx';
import Main from './components/mainPage.jsx';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registerPage" element={<Register />} />
      <Route path="/mainPage" element={<Main />} />
    </Routes>
  </Router>
  )
}

export default App