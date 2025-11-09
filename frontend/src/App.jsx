import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  const [user, setUser] = useState(null)
  const [userType, setUserType] = useState(null) // 'faculty' or 'student'

  function handleLoginSuccess(userData, type) {
    setUser(userData)
    setUserType(type)
    // Save to localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify({ user: userData, type }))
  }

  function handleLogout() {
    setUser(null)
    setUserType(null)
    localStorage.removeItem('currentUser')
  }

  // Initialize from localStorage on first render
  React.useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      const { user: userData, type } = JSON.parse(savedUser)
      setUser(userData)
      setUserType(type)
    }
  }, [])

  return (
    <div>
      <Navbar user={user} userType={userType} onLogout={handleLogout} />
      <main style={{ padding: '1rem' }}>
        <Outlet context={{ user, userType, onLoginSuccess: handleLoginSuccess }} />
      </main>
    </div>
  )
}
