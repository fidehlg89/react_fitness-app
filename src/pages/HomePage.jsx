import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './styles/HomePage.css'

const HomePage = () => (
    <div className="Landing-Container flex column center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="Landing-Hero glass flex column center gap-lg"
        >
            <h1 className="Hero-Title">Transform Your <span className="highlight">Body</span></h1>
            <p className="Hero-Subtitle">The ultimate fitness tracker for high performers. Track, analyze, and crush your goals with a modern touch.</p>
            
            <Link to='/exercise'>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="Hero-Button"
                >
                    Get Started Free
                </motion.button>
            </Link>
        </motion.div>
        
        <div className="Landing-Decoration decoration-1"></div>
        <div className="Landing-Decoration decoration-2"></div>
    </div>
)

export default HomePage 