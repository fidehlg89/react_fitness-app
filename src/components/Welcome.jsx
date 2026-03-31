import React from 'react'
import './styles/Welcome.css'

const Welcome = ({ username }) => (
    <div className="Welcome-Container">
        <div className="Welcome-Info">
            <h1 className="Welcome-Title">
                Hello, <span className="highlight">{username}</span>
            </h1>
            <p className="Welcome-Subtitle">
                Ready to crush your goals today? Let's get some gains!
            </p>
        </div>
    </div>
)

export default Welcome