import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentLogin({ onLoginSuccess }) {
  const [studentId, setStudentId] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:4000/api/student-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
        setLoading(false)
        return
      }

      // Call parent callback to update user state
      onLoginSuccess(data.student, 'student')

      // Redirect to dashboard
      navigate('/student-dashboard')
    } catch (err) {
      setError(`Error: ${err.message}`)
      setLoading(false)
    }
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>Student Login</h1>
            <p style={styles.subtitle}>Enter your Student ID to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Student ID</label>
              <input
                type="text"
                placeholder="e.g., S001, S002, ..."
                value={studentId}
                onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                style={styles.input}
                required
                disabled={loading}
              />
            </div>

            {error && <div style={styles.error}>{error}</div>}

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div style={styles.divider}>or</div>

          <div style={styles.hint}>
            <p style={styles.hintTitle}><strong>Need Help?</strong></p>
            <p style={styles.hintText}>Contact your administrator for your Student ID if you don't have one.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    padding: '2rem 1rem'
  },
  cardContainer: {
    width: '100%',
    maxWidth: 450
  },
  card: {
    background: '#fff',
    padding: '3rem 2rem',
    borderRadius: 12,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    animation: 'slideIn 0.3s ease-out'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    margin: 0,
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#666',
    fontSize: '1rem',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontWeight: 600,
    color: '#333',
    fontSize: '0.95rem'
  },
  input: {
    padding: '0.85rem',
    border: '2px solid #ddd',
    borderRadius: 6,
    fontSize: '1rem',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s'
  },
  error: {
    color: '#fff',
    background: '#dc3545',
    padding: '0.85rem',
    borderRadius: 6,
    marginTop: '0.5rem',
    fontSize: '0.95rem',
    textAlign: 'center'
  },
  button: {
    padding: '0.85rem',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    marginTop: '0.5rem'
  },
  divider: {
    textAlign: 'center',
    color: '#999',
    margin: '1.5rem 0',
    fontSize: '0.9rem'
  },
  hint: {
    padding: '1.5rem',
    background: '#f9f9f9',
    borderRadius: 8,
    border: '1px solid #e0e0e0'
  },
  hintTitle: {
    fontSize: '0.9rem',
    color: '#333',
    margin: '0 0 0.5rem 0'
  },
  hintText: {
    fontSize: '0.85rem',
    color: '#666',
    margin: 0
  }
}
