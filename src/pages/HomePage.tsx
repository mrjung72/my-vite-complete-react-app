import React from 'react'
import DateDisplay from '../components/DateDisplay'
import { useAppSelector } from '../store/store'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    const username = useAppSelector((state) => state.user.username)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const loading = useAppSelector((state) => state.ui.loading)
    return (
        <Layout>
            <h1 style={{ fontSize: '4em' }}>좋은 아침</h1>
            <p>로그인 상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
            <div style={{ marginTop: '1rem' }}>
                <Link to="/login" style={{ marginRight: '1rem' }}>로그인</Link>
                <Link to="/register" style={{ marginRight: '1rem' }}>회원가입</Link>
                <Link to="/users" style={{ marginRight: '1rem' }}>회원리스트</Link>
                <Link to="/upload-csv" style={{ marginRight: '1rem' }}>csv파일 업로드</Link>
            </div>
            <DateDisplay />
        </Layout>
    )
}

export default HomePage
