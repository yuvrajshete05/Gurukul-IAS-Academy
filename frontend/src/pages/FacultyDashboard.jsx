import React from 'react'

export default function FacultyDashboard({ user }) {
  if (!user) {
    return (
      <div style={styles.container}>
        <h2>Please  ss</h2>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Faculty Dashboard</h1>
        
        <div style={styles.profileSection}>
          <h2 style={styles.sectionTitle}>Profile Information</h2>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Faculty ID</label>
              <p style={styles.infoValue}>{user.id}</p>
            </div>

            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Name</label>
              <p style={styles.infoValue}>{user.name}</p>
            </div>

            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Email</label>
              <p style={styles.infoValue}>{user.email}</p>
            </div>

            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Education</label>
              <p style={styles.infoValue}>{user.education}</p>
            </div>

            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Specialization</label>
              <p style={styles.infoValue}>{user.specialization}</p>
            </div>

            <div style={styles.infoItem}>
              <label style={styles.infoLabel}>Category</label>
              <p style={styles.infoValue}>{user.category}</p>
            </div>
          </div>
        </div>

        <div style={styles.actionsSection}>
          <h2 style={styles.sectionTitle}>Quick Actions</h2>
          <div style={styles.actionButtons}>
            <button style={styles.actionBtn}>View Classes</button>
            <button style={styles.actionBtn}>Manage Students</button>
            <button style={styles.actionBtn}>Upload Materials</button>
            <button style={styles.actionBtn}>View Attendance</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    background: '#f5f5f5',
    minHeight: '80vh'
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: 800,
    margin: '0 auto'
  },
  profileSection: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    color: '#333',
    marginBottom: '1rem',
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  infoItem: {
    padding: '1rem',
    background: '#f9f9f9',
    borderRadius: 4,
    borderLeft: '4px solid #007bff'
  },
  infoLabel: {
    fontSize: '0.85rem',
    color: '#666',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  infoValue: {
    fontSize: '1rem',
    color: '#333',
    marginTop: '0.5rem',
    fontWeight: 500
  },
  actionsSection: {
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #eee'
  },
  actionButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem'
  },
  actionBtn: {
    padding: '0.75rem 1rem',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'background 0.2s'
  }
}
