import React from 'react'
import Card from './Card'
import { AnimatePresence } from 'framer-motion'

const ExerciseList = ({ exercises, onDelete }) => {
    return (
        <div style={{ paddingBottom: '100px' }}>
            <AnimatePresence>
                {exercises.map((exercise) => (
                    <Card
                        key={exercise.id}
                        onDelete={onDelete}
                        {...exercise}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

export default ExerciseList