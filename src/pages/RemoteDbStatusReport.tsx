// src/pages/RemoteDbStatusReport.tsx
import React, { useEffect, useState } from 'react';

interface Status {
  ip: string;
  status: string;
  error?: string;
}


const RemoteDbStatusReport: React.FC = () => {

    const [data, setData] = useState<Status[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/remotedb-status')
    .then((res) => res.json())
    .then(setData)
    .catch(console.error);
  }, []);


  return (
    <div>
      <h2>DB 접속 상태 리포트</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>서버 IP</th>
            <th>접속 상태</th>
            <th>에러 메시지</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ ip, status, error }) => (
            <tr key={ip}>
              <td>{ip}</td>
              <td style={{ color: status === '성공' ? 'green' : 'red' }}>{status}</td>
              <td>{error || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoteDbStatusReport;
