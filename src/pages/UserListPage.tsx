// src/pages/UserListPage.tsx
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

type User = {
    id: number
    username: string
    email: string
    createdAt: string
}

const UserListPage = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/api/users')
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched users:', data[0])
                setUsers(data[0])
                })            
            .catch(console.error)
    }, [])

    return (
        <Layout>
            <h2>회원 목록</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.username} ({user.email}) on {user.createdAt}</li>
                ))}
            </ul>
        </Layout>
    )
}

export default UserListPage
