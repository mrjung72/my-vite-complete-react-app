// src/components/Header.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../store/store'
import { logout } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const username = useAppSelector((state) => state.auth.username)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
            <nav>
                <Link to="/" style={{ marginRight: '1rem' }}>🏠</Link>
            </nav>
            {isLoggedIn && (
                <div>
                    👤 <strong>{username}</strong> 님
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            )}
            {!isLoggedIn && (
                <Link to="/login">로그인</Link>
            )}
        </header>
    )
}

export default Header
