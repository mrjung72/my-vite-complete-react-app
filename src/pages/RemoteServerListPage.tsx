// RemoteServerListPage.tsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const RemoteServerListPage = () => {
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
            <ul>
                {servers.map((server: any) => (
                    <li key={server.id}>
                        <div>
                            <span>{server.ip}:{server.port}</span>&nbsp;-&nbsp;
                            <span>[{server.corp_id}]&nbsp;{server.name}&nbsp;({server.env_type})</span>&nbsp;
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
            <ul>
            </ul>
        </div>
    )
}

export default RemoteServerListPage
