// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function FacultyLogin({ onLoginSuccess }) {
//   const [facultyId, setFacultyId] = useState('')
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   async function handleLogin(e) {
//     e.preventDefault()
//     setError('')
//     setLoading(true)

//     try {
//       const response = await fetch('http://localhost:4000/api/faculty-login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ facultyId })
//       })

//       const data = await response.json()

//       if (!response.ok) {
//         setError(data.error || 'Login failed')
//         setLoading(false)
//         return
//       }

//       // Call parent callback to update user state
//       onLoginSuccess(data.faculty)

//       // Redirect to dashboard
//       navigate('/faculty-dashboard')
//     } catch (err) {
//       setError(`Error: ${err.message}`)
//       setLoading(false)
//     }
//   }

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.cardContainer}>
//         <div style={styles.card}>
//           <div style={styles.header}>
//             <h1 style={styles.title}>Faculty Login</h1>
//             <p style={styles.subtitle}>Enter your Faculty ID to access the dashboard</p>
//           </div>

//           <form onSubmit={handleLogin} style={styles.form}>
//             <div style={styles.formGroup}>
//               <label style={styles.label}>Faculty ID</label>
//               <input
//                 type="text"
//                 placeholder="e.g., F001, F002, ..."
//                 value={facultyId}
//                 onChange={(e) => setFacultyId(e.target.value.toUpperCase())}
//                 style={styles.input}
//                 required
//                 disabled={loading}
//               />
//             </div>

//             {error && <div style={styles.error}>{error}</div>}

//             <button type="submit" style={styles.button} disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>


//           <div style={styles.hint}>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 'calc(100vh - 100px)',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     padding: '2rem 1rem'
//   },
//   cardContainer: {
//     width: '100%',
//     maxWidth: 450
//   },
//   card: {
//     background: '#fff',
//     padding: '3rem 2rem',
//     borderRadius: 12,
//     boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
//     animation: 'slideIn 0.3s ease-out'
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '2rem'
//   },
//   title: {
//     fontSize: '2rem',
//     color: '#333',
//     margin: 0,
//     marginBottom: '0.5rem'
//   },
//   subtitle: {
//     color: '#666',
//     fontSize: '1rem',
//     margin: 0
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//     marginBottom: '2rem'
//   },
//   formGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.5rem'
//   },
//   label: {
//     fontWeight: 600,
//     color: '#333',
//     fontSize: '0.95rem'
//   },
//   input: {
//     padding: '0.85rem',
//     border: '2px solid #ddd',
//     borderRadius: 6,
//     fontSize: '1rem',
//     boxSizing: 'border-box',
//     fontFamily: 'inherit',
//     transition: 'border-color 0.2s'
//   },
//   error: {
//     color: '#fff',
//     background: '#dc3545',
//     padding: '0.85rem',
//     borderRadius: 6,
//     marginTop: '0.5rem',
//     fontSize: '0.95rem',
//     textAlign: 'center'
//   },
//   button: {
//     padding: '0.85rem',
//     background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//     color: '#fff',
//     border: 'none',
//     borderRadius: 6,
//     fontSize: '1rem',
//     fontWeight: 600,
//     cursor: 'pointer',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     marginTop: '0.5rem'
//   },
//   divider: {
//     textAlign: 'center',
//     color: '#999',
//     margin: '1.5rem 0',
//     fontSize: '0.9rem'
//   },
//   hint: {
//     padding: '1.5rem',
//     background: '#f9f9f9',
//     borderRadius: 8,
//     border: '1px solid #e0e0e0'
//   },
//   hintTitle: {
//     fontSize: '0.9rem',
//     color: '#333',
//     margin: '0 0 0.75rem 0'
//   },
//   hintList: {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'grid',
//     gridTemplateColumns: '1fr',
//     gap: '0.5rem'
//   }
// }







import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FacultyLogin({ onLoginSuccess }) {
    const [facultyId, setFacultyId] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [focusedInput, setFocusedInput] = useState(false)
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await fetch('http://localhost:4000/api/faculty-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ facultyId })
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.error || 'Login failed')
                setLoading(false)
                return
            }

            onLoginSuccess(data.faculty)
            navigate('/faculty-dashboard')
        } catch (err) {
            setError(`Error: ${err.message}`)
            setLoading(false)
        }
    }

    return (
        <div style={styles.pageContainer}>
            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes glow {
                    0% {
                        box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
                    }
                    50% {
                        box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4);
                    }
                    100% {
                        box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }
            `}</style>
            
            <div style={styles.cardContainer}>
                <div style={styles.card}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Faculty Login</h1>
                        <p style={styles.subtitle}>Enter your Faculty ID to access the dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Faculty ID</label>
                            <input
                                type="text"
                                // placeholder="e.g., F001, F002, ..."
                                placeholder=""
                                value={facultyId}
                                onChange={(e) => setFacultyId(e.target.value.toUpperCase())}
                                onFocus={() => setFocusedInput(true)}
                                onBlur={() => setFocusedInput(false)}
                                style={{
                                    ...styles.input,
                                    borderColor: focusedInput ? '#667eea' : '#ddd',
                                    boxShadow: focusedInput ? '0 0 15px rgba(102, 126, 234, 0.3)' : 'none'
                                }}
                                required
                                disabled={loading}
                            />
                        </div>

                        {error && <div style={styles.error}>{error}</div>}

                        <button 
                            type="submit" 
                            style={{
                                ...styles.button,
                                animation: loading ? 'shimmer 2s infinite' : 'none'
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                   
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        padding: '2rem 1rem',
        animation: 'float 6s ease-in-out infinite'
    },
    cardContainer: {
        width: '100%',
        maxWidth: 450
    },
    card: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
        padding: '3rem 2rem',
        borderRadius: 16,
        boxShadow: '0 15px 50px rgba(102, 126, 234, 0.3)',
        animation: 'slideIn 0.6s ease-out, glow 3s ease-in-out infinite',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        backdropFilter: 'blur(10px)'
    },
    header: {
        textAlign: 'center',
        marginBottom: '2rem',
        animation: 'slideIn 0.8s ease-out'
    },
    title: {
        fontSize: '2.2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        margin: 0,
        marginBottom: '0.5rem',
        fontWeight: 700,
        letterSpacing: '-0.5px'
    },
    subtitle: {
        color: '#666',
        fontSize: '1rem',
        margin: 0,
        fontWeight: 500
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '2rem'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    label: {
        fontWeight: 600,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '0.95rem'
    },
    input: {
        padding: '0.85rem',
        border: '2px solid #ddd',
        borderRadius: 10,
        fontSize: '1rem',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'rgba(255, 255, 255, 0.7)'
    },
    error: {
        color: '#fff',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
        padding: '1rem',
        borderRadius: 10,
        marginTop: '0.5rem',
        fontSize: '0.95rem',
        textAlign: 'center',
        animation: 'slideIn 0.3s ease-out',
        boxShadow: '0 5px 15px rgba(255, 107, 107, 0.3)',
        fontWeight: 500
    },
    button: {
        padding: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '200% 200%',
        color: '#fff',
        border: 'none',
        borderRadius: 10,
        fontSize: '1.05rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: '0.5rem',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        letterSpacing: '0.5px'
    },
    divider: {
        textAlign: 'center',
        color: '#999',
        margin: '1.5rem 0',
        fontSize: '0.9rem'
    },
    hint: {
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%)',
        borderRadius: 12,
        border: '2px solid rgba(102, 126, 234, 0.15)',
        animation: 'slideIn 1s ease-out'
    },
    hintTitle: {
        fontSize: '0.9rem',
        color: '#333',
        margin: '0 0 0.75rem 0'
    },
    hintList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.5rem'
    }
}
