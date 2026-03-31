import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/Errors.css'

const NotFound = () => (
    <div className="flex column center gap-lg" style={{ height: '100vh', textAlign: 'center' }}>
        <h1 className="Hero-Title highlight">404</h1>
        <p className="Hero-Subtitle">Oops! It seems you've wandered out of the gym. This page doesn't exist.</p>
        <Link to="/">
            <button className="Hero-Button">Back to Home</button>
        </Link>
    </div>
)

export default NotFound