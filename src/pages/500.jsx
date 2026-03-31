import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/Errors.css'

const FatalError = () => (
    <div className="flex column center gap-lg" style={{ height: '100vh', textAlign: 'center' }}>
        <h1 className="Hero-Title highlight">500</h1>
        <p className="Hero-Subtitle">Something went wrong. Our servers are taking a rest day. Please try again later.</p>
        <Link to="/">
            <button className="Hero-Button">Back to Home</button>
        </Link>
    </div>
)

export default FatalError