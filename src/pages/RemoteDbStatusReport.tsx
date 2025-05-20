// RemoteDbStatusReport.tsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RemoteDbStatusReport = () => {
    const [servers, setServers] = useState([])
    const [statuses, setStatuses] = useState<{ [id: number]: any }>({})

    useEffect(() => {
        fetch('http://localhost:4000/api/server-list')
            .then(res => res.json())
            .then(setServers)
    }, [])

    const checkStatus = async (id: number) => {
        setStatuses(prev => ({ ...prev, [id]: { loading: true } }))
        const res = await fetch(`http://localhost:4000/api/server-status/${id}`)
        const data = await res.json()
        setStatuses(prev => ({ ...prev, [id]: data }))
    }

    return (
        <div>
            <h2>서버 상태 확인</h2>
            <Link to="/upload-csv" style={{ marginRight: '1rem' }}>csv파일 업로드</Link>
            <ul>
                {servers.map((server: any) => (
                    <li key={server.id}>
                        <div>
                            <strong>{server.ip}</strong>
                            <button onClick={() => checkStatus(server.id)}>확인</button>
                            {statuses[server.id]?.loading && <span> 확인 중...</span>}
                            {statuses[server.id]?.status === 'connected' && (
                                <div>✅ 연결됨 - {statuses[server.id].version}</div>
                            )}
                            {statuses[server.id]?.status === 'error' && (
                                <div>❌ 오류: {statuses[server.id].error}</div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RemoteDbStatusReport
