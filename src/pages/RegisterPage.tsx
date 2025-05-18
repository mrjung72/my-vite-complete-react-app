import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'

const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email }),
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
        <div>
          <label>이름:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </Layout>
  );  
}

export default RegisterPage
