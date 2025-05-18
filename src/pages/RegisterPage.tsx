import React, { useState } from 'react'
import Layout from '../components/Layout'

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })

        if (res.ok) {
            alert('회원가입 성공')
        } else {
            alert('회원가입 실패')
        }
    }

    return (
        <Layout>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">회원가입</button>
            </form>
        </Layout>
    )
}

export default RegisterPage
