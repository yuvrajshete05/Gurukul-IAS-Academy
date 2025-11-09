import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ user, userType, onLogout }) {
  const navigate = useNavigate()

  function handleFacultyLogin() {
    navigate('/faculty-login')
  }

  function handleStudentLogin() {
    navigate('/student-login')
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>
        <Link to="/" style={styles.link}>Gurukul IAS Academy</Link>
      </div>
      <div style={styles.userSection}>
        {user ? (
          <>
            <span style={styles.userType}>{userType === 'faculty' ? '👨‍🏫 Faculty' : '👨‍🎓 Student'}</span>
            <span style={styles.userName}>Welcome, {user.name}</span>
            <button onClick={onLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <div style={styles.loginButtons}>
            <button onClick={handleFacultyLogin} style={styles.button}>F Login</button>
            <button onClick={handleStudentLogin} style={styles.studentBtn}>S Login</button>
          </div>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1.5rem',
    borderBottom: '2px solid #ddd',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    color: '#fff'
  },
  brand: {
    fontWeight: '700',
    fontSize: '1.4rem',
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },
  loginButtons: {
    display: 'flex',
    gap: '0.75rem'
  },
  userType: {
    fontSize: '0.85rem',
    color: '#fff',
    fontWeight: 500
  },
  userName: {
    fontSize: '0.95rem',
    color: '#fff',
    fontWeight: 500
  },
  button: {
    padding: '0.5rem 1rem',
    border: '2px solid #fff',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'all 0.2s'
  },
  studentBtn: {
    padding: '0.5rem 1rem',
    border: '2px solid #fff',
    background: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'all 0.2s'
  },
  logoutBtn: {
    padding: '0.5rem 1rem',
    border: '2px solid #ff6b6b',
    background: '#ff6b6b',
    color: '#fff',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500
  }
}
