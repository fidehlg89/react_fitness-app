import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

const Card = ({ id, title, description, img, leftColor, rightColor, onEdit, onDelete }) => {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="Fitness-Card glass"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(135deg, ${leftColor || '#56CCF2'} 0%, ${rightColor || '#2F80ED'} 100%)`
            }}
        >
            <div className="Fitness-Card-Body">
                <div className="Fitness-Card-Image-Container">
                    <img src={img || emptyImg} alt={title} />
                </div>
                <div className="Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    
                    <div className="Fitness-Card-Actions">
                        <Link to={`/exercise/edit/${id}`} className="action-btn" title="Edit">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button onClick={() => onDelete(id)} className="action-btn delete" title="Delete">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card