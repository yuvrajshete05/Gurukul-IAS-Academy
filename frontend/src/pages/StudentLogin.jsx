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

            onLoginSuccess(data.student, 'student')
            navigate('/student-dashboard')
        } catch (err) {
            setError(`Error: ${err.message}`)
            setLoading(false)
        }
    }

    return (
        <>
            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 10px 40px rgba(245, 87, 108, 0.3);
                    }
                    50% {
                        box-shadow: 0 20px 60px rgba(245, 87, 108, 0.6), 0 0 30px rgba(240, 147, 251, 0.4);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
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

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
            `}</style>

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
                                    // placeholder="e.g., S001, S002, ..."
                                    placeholder=""
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value.toUpperCase())}
                                    style={styles.input}
                                    required
                                    disabled={loading}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#f5576c'
                                        e.target.style.boxShadow = '0 0 15px rgba(245, 87, 108, 0.4)'
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#ddd'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {error && <div style={styles.error}>{error}</div>}

                            <button 
                                type="submit" 
                                style={styles.button} 
                                disabled={loading}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px) scale(1.02)'
                                    e.target.style.boxShadow = '0 15px 40px rgba(245, 87, 108, 0.4)'
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)'
                                    e.target.style.boxShadow = '0 8px 20px rgba(245, 87, 108, 0.2)'
                                }}
                            >
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
        </>
    )
}

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden'
    },
    cardContainer: {
        width: '100%',
        maxWidth: 450,
        animation: 'float 3s ease-in-out infinite'
    },
    card: {
        background: '#fff',
        padding: '3rem 2rem',
        borderRadius: 12,
        boxShadow: '0 10px 40px rgba(245, 87, 108, 0.3)',
        animation: 'slideIn 0.6s ease-out, glow 3s ease-in-out infinite',
        transition: 'all 0.3s ease',
    },
    header: {
        textAlign: 'center',
        marginBottom: '2rem',
        animation: 'slideIn 0.8s ease-out'
    },
    title: {
        fontSize: '2rem',
        color: '#333',
        margin: 0,
        marginBottom: '0.5rem',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'pulse 2s ease-in-out infinite'
    },
    subtitle: {
        color: '#666',
        fontSize: '1rem',
        margin: 0,
        animation: 'slideIn 1s ease-out'
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
        fontSize: '0.95rem',
        animation: 'slideIn 1.1s ease-out'
    },
    input: {
        padding: '0.85rem',
        border: '2px solid #ddd',
        borderRadius: 6,
        fontSize: '1rem',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
        outline: 'none'
    },
    error: {
        color: '#fff',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #dc3545 100%)',
        padding: '0.85rem',
        borderRadius: 6,
        marginTop: '0.5rem',
        fontSize: '0.95rem',
        textAlign: 'center',
        animation: 'slideIn 0.4s ease-out, pulse 1s ease-in-out',
        boxShadow: '0 5px 20px rgba(220, 53, 69, 0.3)'
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
        transition: 'all 0.3s ease',
        marginTop: '0.5rem',
        boxShadow: '0 8px 20px rgba(245, 87, 108, 0.2)',
        animation: 'slideIn 1.2s ease-out'
    },
    divider: {
        textAlign: 'center',
        color: '#999',
        margin: '1.5rem 0',
        fontSize: '0.9rem',
        animation: 'slideIn 1.3s ease-out'
    },
    hint: {
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #f9f9f9 0%, #fff 100%)',
        borderRadius: 8,
        border: '1px solid #e0e0e0',
        transition: 'all 0.3s ease',
        animation: 'slideIn 1.4s ease-out',
        cursor: 'pointer'
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
