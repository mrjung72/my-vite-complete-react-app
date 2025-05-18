import React, { useState } from 'react'
import Layout from '../components/Layout'

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
            const response = await fetch('http://localhost:4000/api/upload-csv', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()
            setMessage(data.message)
        } catch (err) {
            setMessage('업로드 중 오류 발생')
            console.error(err)
        } finally {
            setUploading(false)
        }
    }

    return (
        <Layout>
            <h2>CSV 업로드</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? '업로드 중...' : '업로드'}
            </button>
            {message && <p>{message}</p>}
        </Layout>
    )
}

export default CsvUploadPage
