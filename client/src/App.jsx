import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/home/home"
import { Login } from "./components/registration/login"
import { Signup } from "./components/registration/signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/log-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
