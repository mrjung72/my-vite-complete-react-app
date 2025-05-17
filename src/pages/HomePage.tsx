import React from 'react'
import DateDisplay from '../components/DateDisplay'
  // Redux 상태 가져오기
import { useAppSelector } from '../store/reducers/store'

const HomePage: React.FC = () => {
    const username = useAppSelector((state) => state.user.username)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const loading = useAppSelector((state) => state.ui.loading)
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            <p>로그인 상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
            <p>사용자: {username || '없음'}</p>
            {loading && <p>로딩 중...</p>}
            <DateDisplay />
        </div>
    )
}

export default HomePage
