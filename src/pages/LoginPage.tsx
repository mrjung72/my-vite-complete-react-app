// src/pages/LoginPage.tsx
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/slices/authSlice';

// src/pages/LoginPage.tsx
import Layout from '../components/Layout'
import { al } from 'react-router/dist/development/route-data-B9_30zbP';



const LoginPage: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {

        try {
        
          e.preventDefault()
          const res = await fetch('http://localhost:4000/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
          })
  
            if (res.ok) {
                dispatch(login(username));
                navigate('/');
            }
            else {
                const errorData = await res.json()
                alert(errorData.message)
            }   

        } catch (error) {
            alert(error)
            console.error('로그인 오류:', error)
        }
    }
  

    return (
        <Layout>
            <h2>로그인 페이지</h2>
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
          <label>비밀번호:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>            
        <button type="submit">Login</button>
            </form>
        </Layout>
    )
}

export default LoginPage
