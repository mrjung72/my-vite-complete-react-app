// src/components/Layout.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>

            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>

        </div>
    )
}

export default Layout
