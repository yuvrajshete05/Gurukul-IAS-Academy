import React, { useState } from 'react'

export default function Login() {
    const [loginId, setLoginId] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        alert(`Login stub: ${loginId}`)
    }

    return (
        <div style={{ maxWidth: 480 }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 8 }}>
                    <label>
                        Login ID
                        <input value={loginId} onChange={e => setLoginId(e.target.value)} style={{ display: 'block', width: '100%', padding: 8 }} />
                    </label>
                </div>
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Sign in</button>
            </form>
        </div>
    )
}
