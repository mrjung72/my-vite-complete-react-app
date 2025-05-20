// src/RootComponent.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage'
import UserListPage from './pages/UserListPage'
import CsvUploadPage from './pages/CsvUploadPage'
import RemoteDBStatus from './pages/RemoteServerListPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.LOGIN_ROUTE} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER_ROUTE} element={<RegisterPage />} />
                <Route path={ROUTES.USER_ROUTE} element={<UserListPage />} />
                <Route path={ROUTES.UPLOAD_CSV_ROUTE} element={<CsvUploadPage />} />
                <Route path={ROUTES.REMOTEDB_STATUS_ROUTE} element={<RemoteDBStatus />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RootComponent
