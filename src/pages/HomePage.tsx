import React from 'react'
import DateDisplay from '../components/DateDisplay'
import { useAppSelector } from '../store/reducers/store'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    const username = useAppSelector((state) => state.user.username)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const loading = useAppSelector((state) => state.ui.loading)
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            <p>로그인 상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
            <div style={{ marginTop: '1rem' }}>
                <Link to="/login" style={{ marginRight: '1rem' }}>로그인</Link>
                <Link to="/register">회원가입</Link>
            </div>
            <DateDisplay />
        </div>
    )
}

export default HomePage
