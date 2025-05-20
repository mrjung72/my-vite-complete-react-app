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
            <DateDisplay />
            <div style={{ marginTop: '1rem' }}>                
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <Link to="/remotedb-status" style={{ marginRight: '1rem' }}>원격서버목록</Link>
                </ul>
            
            {isLoggedIn && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <Link to="/users" style={{ marginRight: '1rem' }}>회원리스트</Link>
                </ul>

            )}
            {!isLoggedIn && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <Link to="/upload-csv" style={{ marginRight: '1rem' }}>서버정보 csv파일 업로드</Link>
                </ul>
            )}
            </div>
        </Layout>
    )
}

export default HomePage
