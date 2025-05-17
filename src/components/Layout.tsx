// src/components/Layout.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header style={{ padding: '1rem', background: '#f5f5f5' }}>
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>🏠 홈</Link>
            </header>
            <main style={{ padding: '2rem' }}>
                {children}
            </main>
        </div>
    )
}

export default Layout
