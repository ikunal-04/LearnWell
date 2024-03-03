import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Homepage from './pages/Homepage'
import Communities from './pages/Communities'
import FullBlog from './pages/FullBlog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog/:id" element={<FullBlog />}/>
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
