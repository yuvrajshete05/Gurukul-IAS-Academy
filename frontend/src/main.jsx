import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useOutletContext } from 'react-router-dom'
import App from './App'
import Welcome from './pages/Welcome'
import FacultyLogin from './pages/FacultyLogin'
import FacultyDashboard from './pages/FacultyDashboard'
import StudentLogin from './pages/StudentLogin'
import StudentDashboard from './pages/StudentDashboard'
import './main.css'

function FacultyLoginPage() {
  const { onLoginSuccess } = useOutletContext()
  return <FacultyLogin onLoginSuccess={onLoginSuccess} />
}

function FacultyDashboardPage() {
  const { user } = useOutletContext()
  return <FacultyDashboard user={user} />
}

function StudentLoginPage() {
  const { onLoginSuccess } = useOutletContext()
  return <StudentLogin onLoginSuccess={onLoginSuccess} />
}

function StudentDashboardPage() {
  const { user } = useOutletContext()
  return <StudentDashboard user={user} />
}

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="faculty-login" element={<FacultyLoginPage />} />
          <Route path="faculty-dashboard" element={<FacultyDashboardPage />} />
          <Route path="student-login" element={<StudentLoginPage />} />
          <Route path="student-dashboard" element={<StudentDashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
