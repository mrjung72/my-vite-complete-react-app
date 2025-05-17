// src/pages/LoginPage.tsx
import LoginForm from '../components/Auth/LoginForm';

// src/pages/LoginPage.tsx
import Layout from '../components/Layout'

const LoginPage: React.FC = () => {
    return (
        <Layout>
            <h2>로그인 페이지</h2>
            <LoginForm />
        </Layout>
    )
}

export default LoginPage
