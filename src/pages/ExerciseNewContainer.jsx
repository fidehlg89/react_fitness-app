import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from '../config'

const ExerciseNewContainer = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        id: Math.random().toString(36).substr(2, 9),
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        try {
            await fetch(`${url}/exercises`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            setLoading(false)
            navigate('/exercise')
        } catch (error) {
            console.error("Save failed locally:", error);
            // Persistence for mock: save to localStorage
            const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
            localStorage.setItem('fitness_exercises', JSON.stringify([...localData, form]));
            setLoading(false)
            navigate('/exercise')
        }
    }

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <div className="container">
            <ExerciseNew
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ExerciseNewContainer