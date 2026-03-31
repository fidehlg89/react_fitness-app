import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './styles/AddButton.css'

const AddButton = () => (
    <div className="Add-Button-Wrapper">
        <Link to="/exercise/new">
            <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="Add-Button-Floating shadow"
                title="Add New Exercise"
            >
                <i className="fa fa-plus"></i>
            </motion.button>
        </Link>
    </div>
)

export default AddButton