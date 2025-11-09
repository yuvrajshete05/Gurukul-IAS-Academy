// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// export default function Navbar({ user, userType, onLogout }) {
//   const navigate = useNavigate()

//   function handleFacultyLogin() {
//     navigate('/faculty-login')
//   }

//   function handleStudentLogin() {
//     navigate('/student-login')
//   }

//   return (
//     <nav style={styles.nav}>
//       <div style={styles.brand}>
//         <Link to="/" style={styles.link}>Gurukul IAS Academy</Link>
//       </div>
//       <div style={styles.userSection}>
//         {user ? (
//           <>
//             <span style={styles.userType}>{userType === 'faculty' ? '👨‍🏫 Faculty' : '👨‍🎓 Student'}</span>
//             <span style={styles.userName}>Welcome, {user.name}</span>
//             <button onClick={onLogout} style={styles.logoutBtn}>Logout</button>
//           </>
//         ) : (
//           <div style={styles.loginButtons}>
//             <button onClick={handleFacultyLogin} style={styles.button}>F Login</button>
//             <button onClick={handleStudentLogin} style={styles.studentBtn}>S Login</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// const styles = {
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0.75rem 1.5rem',
//     borderBottom: '2px solid #ddd',
//     background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
//     color: '#fff'
//   },
//   brand: {
//     fontWeight: '700',
//     fontSize: '1.4rem',
//     color: '#fff'
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'inherit'
//   },
//   userSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1.5rem'
//   },
//   loginButtons: {
//     display: 'flex',
//     gap: '0.75rem'
//   },
//   userType: {
//     fontSize: '0.85rem',
//     color: '#fff',
//     fontWeight: 500
//   },
//   userName: {
//     fontSize: '0.95rem',
//     color: '#fff',
//     fontWeight: 500
//   },
//   button: {
//     padding: '0.5rem 1rem',
//     border: '2px solid #fff',
//     background: 'rgba(255, 255, 255, 0.2)',
//     color: '#fff',
//     borderRadius: 6,
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     transition: 'all 0.2s'
//   },
//   studentBtn: {
//     padding: '0.5rem 1rem',
//     border: '2px solid #fff',
//     background: 'rgba(255, 255, 255, 0.3)',
//     color: '#fff',
//     borderRadius: 6,
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 500,
//     transition: 'all 0.2s'
//   },
//   logoutBtn: {
//     padding: '0.5rem 1rem',
//     border: '2px solid #ff6b6b',
//     background: '#ff6b6b',
//     color: '#fff',
//     borderRadius: 6,
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//     fontWeight: 500
//   }
// }









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
      <div style={styles.brandSection}>
        <div style={styles.logo}>📚</div>
        <div style={styles.brand}>
          <Link to="/" style={styles.link}>Gurukul IAS Academy</Link>
        </div>
      </div>
      <div style={styles.userSection}>
        {user ? (
          <>
            <span style={styles.userType}>{userType === 'faculty' ? '👨‍🏫 Faculty' : '👨‍🎓 Student'}</span>
            <span style={styles.userName}>Welcome, {user.name}</span>
            <button onMouseEnter={(e) => e.target.style.boxShadow = '0 0 15px rgba(255,107,107,0.6)'} onMouseLeave={(e) => e.target.style.boxShadow = 'none'} onClick={onLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <div style={styles.loginButtons}>
            <button onMouseEnter={(e) => e.target.style.boxShadow = '0 0 15px rgba(255,255,255,0.5)'} onMouseLeave={(e) => e.target.style.boxShadow = 'none'} onClick={handleFacultyLogin} style={styles.button}>F Login</button>
            <button onMouseEnter={(e) => e.target.style.boxShadow = '0 0 15px rgba(255,255,255,0.6)'} onMouseLeave={(e) => e.target.style.boxShadow = 'none'} onClick={handleStudentLogin} style={styles.studentBtn}>S Login</button>
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
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  brandSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    animation: 'slideInLeft 0.6s ease-out'
  },
  logo: {
    fontSize: '2rem',
    animation: 'bounce 2s infinite'
  },
  brand: {
    fontWeight: '700',
    fontSize: '1.4rem',
    color: '#fff'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s'
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
    transition: 'all 0.3s',
    boxShadow: 'none'
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
    transition: 'all 0.3s',
    boxShadow: 'none'
  },
  logoutBtn: {
    padding: '0.5rem 1rem',
    border: '2px solid #ff6b6b',
    background: '#ff6b6b',
    color: '#fff',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'all 0.3s',
    boxShadow: 'none'
  }
}

// Add this to your global CSS or a CSS module
const keyframes = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`
