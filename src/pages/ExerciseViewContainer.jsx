import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseView from './ExerciseView'
import url from '../config'

const ExercisesViewContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(`${url}/exercises/${id}`);
                if (!res.ok) throw new Error('Not found');
                let result = await res.json();
                setData(result.exercise || result);
                setLoading(false);
            } catch (error) {
                console.warn("Using local fallback for edit.");
                // Fallback: check localStorage then mock data
                const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
                const found = localData.find(e => e.id === id);
                if (found) {
                    setData(found);
                } else {
                    // Try mock data
                    const MOCK_DATA = [
                        { id: "1", title: "Technique Guides", description: "Learn the amazing exercises picked by experts.", img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise.png?alt=media&token=7d490919-bbbb-453b-bd44-063074d251d1", leftColor: "#A74CF2", rightColor: "#617BFB" },
                        { id: "2", title: "Stay Focused", description: "Consistency is key to seeing results. Keep going!", img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise02.png?alt=media&token=014d59bc-5b43-41a4-b09b-61019685a49c", leftColor: "#17ead9", rightColor: "#6078ea" },
                        { id: "3", title: "Weight Loss", description: "Burn fat and feel better than ever.", img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise03.png?alt=media&token=8e51c13e-721a-40dc-ad20-003a11c89227", leftColor: "#f093fb", rightColor: "#f5576c" }
                    ];
                    const mockFound = MOCK_DATA.find(e => e.id === id);
                    if (mockFound) setData(mockFound);
                    else setError(new Error('Exercise not found'));
                }
                setLoading(false);
            }
        }
        fetchResource()
    }, [id])

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        try {
            await fetch(`${url}/exercises/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setLoading(false)
            navigate('/exercise')
        } catch (error) {
            console.warn("Update failed on backend, updating locally.");
            // Update localStorage
            const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
            const index = localData.findIndex(e => e.id === id);
            if (index !== -1) {
                localData[index] = data;
                localStorage.setItem('fitness_exercises', JSON.stringify(localData));
            } else {
                localStorage.setItem('fitness_exercises', JSON.stringify([...localData, data]));
            }
            setLoading(false)
            navigate('/exercise')
        }
    }

    if (loading)
        return <Loading />

    if (error || !data)
        return <FatalError />

    return (
        <div className="container">
            <ExerciseView
                form={data}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ExercisesViewContainer
