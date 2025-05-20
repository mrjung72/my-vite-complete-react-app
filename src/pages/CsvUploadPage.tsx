import React, { useState } from 'react'
import Layout from '../components/Layout'
import { data } from 'react-router'

const CsvUploadPage = () => {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [message, setMessage] = useState('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

const handleUpload = async () => {
        if (!file) {
            setMessage('CSV 파일을 선택하세요.')
            return
        }

        const formData = new FormData()
        formData.append('file', file)

        setUploading(true)
        setMessage('')

        try {
            const response = await fetch('http://localhost:4000/api/upload-servers', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()
            if (data.success) {
                setMessage(`${data.message} ${data.uploadedCount}개의 서버 정보가 업로드되었습니다.`)
            }   
            else {
                setMessage('[ERROR] ' + data.error)
            }   
            console.log(data)

        } catch (err) {
            console.error(err)
            setMessage('업로드 중 오류가 발생했습니다.')
        } finally {
            setUploading(false)
        }
    }

    return (
        <Layout>
            <h2>서버정보CSV 업로드</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? '업로드 중...' : '업로드'}
            </button>
            {message && <p>{message}</p>}
        </Layout>
    )
}

export default CsvUploadPage
