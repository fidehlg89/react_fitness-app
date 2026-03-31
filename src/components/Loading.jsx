import React from 'react'
import './styles/Loading.css'

const Loading = () => (
    <div className="flex column center gap-md" style={{ height: '70vh' }}>
        <div className="Loader"></div>
        <p className="Loader-Text">Building your gains...</p>
    </div>
)

export default Loading