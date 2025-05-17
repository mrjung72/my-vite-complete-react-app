// src/components/Layout.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{ padding: '1rem', background: '#f5f5f5' }}>
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>🏠 홈</Link>
            </header>

            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>

            <footer style={{ padding: '1rem', background: '#f5f5f5', textAlign: 'center' }}>
                ⓒ 2025 MyReactApp. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout
