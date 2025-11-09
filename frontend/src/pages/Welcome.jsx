import React from 'react'

export default function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome to Vaidehi</h1>
          <p style={styles.subtitle}>Educational Management System</p>
        </div>

        <div style={styles.content}>
          <p style={styles.mainText}>
            Welcome to our comprehensive educational management platform designed for faculty and students.
          </p>

          <div style={styles.featureSection}>
            <h2 style={styles.featureTitle}>🎓 For Faculty Members</h2>
            <p style={styles.featureText}>
              Manage your classes, track student attendance, upload course materials, and monitor academic progress.
            </p>
          </div>

          <div style={styles.featureSection}>
            <h2 style={styles.featureTitle}>👨‍🎓 For Students</h2>
            <p style={styles.featureText}>
              Access your courses, check attendance, submit assignments, and view your grades all in one place.
            </p>
          </div>

          <div style={styles.ctaSection}>
            <p style={styles.ctaText}>Select your login type from the navigation bar to get started:</p>
            <div style={styles.buttons}>
              <button style={styles.facultyBtn} onClick={() => window.location.href = '/faculty-login'}>
                👨‍🏫 Faculty Login
              </button>
              <button style={styles.studentBtn} onClick={() => window.location.href = '/student-login'}>
                👨‍🎓 Student Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem 1rem'
  },
  card: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    maxWidth: 700,
    animation: 'slideIn 0.5s ease-out'
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    padding: '3rem 2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 0.5rem 0',
    fontWeight: 700
  },
  subtitle: {
    fontSize: '1.1rem',
    margin: 0,
    opacity: 0.9,
    fontWeight: 300
  },
  content: {
    padding: '3rem 2rem'
  },
  mainText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: 1.6,
    marginBottom: '2rem',
    textAlign: 'center'
  },
  featureSection: {
    marginBottom: '2rem',
    padding: '1.5rem',
    background: '#f8f9fa',
    borderRadius: 8,
    borderLeft: '4px solid #667eea'
  },
  featureTitle: {
    fontSize: '1.1rem',
    color: '#333',
    margin: '0 0 0.5rem 0',
    fontWeight: 600
  },
  featureText: {
    fontSize: '0.95rem',
    color: '#666',
    margin: 0,
    lineHeight: 1.5
  },
  ctaSection: {
    marginTop: '2.5rem',
    padding: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 8,
    textAlign: 'center'
  },
  ctaText: {
    color: '#fff',
    fontSize: '0.95rem',
    margin: '0 0 1.5rem 0'
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  facultyBtn: {
    padding: '0.85rem 1.5rem',
    background: '#fff',
    color: '#667eea',
    border: 'none',
    borderRadius: 6,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  studentBtn: {
    padding: '0.85rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    border: '2px solid #fff',
    borderRadius: 6,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  }
}
