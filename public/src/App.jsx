import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/courses/")
        .then(async (response) => {
          setCourses(response.data.courses);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        {/* <Route path="/communities" element={<Communities />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
