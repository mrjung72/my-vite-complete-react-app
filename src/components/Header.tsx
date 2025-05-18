// src/components/Header.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'

const Header: React.FC = () => {
    const username = useAppSelector((state) => state.user.username)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
            <nav>
                <Link to="/" style={{ marginRight: '1rem' }}>홈</Link>
                <Link to="/users" style={{ marginRight: '1rem' }}>회원목록</Link>
                <Link to="/register" style={{ marginRight: '1rem' }}>회원가입</Link>
                <Link to="/login">로그인</Link>
            </nav>
            {isLoggedIn && (
                <div>
                    👤 <strong>{username}</strong> 님
                </div>
            )}
        </header>
    )
}

export default Header
