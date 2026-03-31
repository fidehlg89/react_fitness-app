import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Exercises from './Exercises'
import useFetch from '../hooks/useFetch'
import url from '../config'

const ExercisesContainer = () => {
    const { data, loading, error, setData } = useFetch(`${url}/exercises`);

    const handleDelete = async (id) => {
        try {
            await fetch(`${url}/exercises/${id}`, { method: 'DELETE' });
            // Update local state anyway (works for mock/local too)
            const updatedData = data.filter(e => e.id !== id);
            setData(updatedData);
            // Update localStorage for permanence if it was a custom exercise
            const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
            localStorage.setItem('fitness_exercises', JSON.stringify(localData.filter(e => e.id !== id)));
        } catch (error) {
            console.error("Delete failed locally:", error);
            const updatedData = data.filter(e => e.id !== id);
            setData(updatedData);
        }
    }

    if (loading)
        return <Loading />

    if (error && data.length === 0)
        return <FatalError />

    return <Exercises
        data={data}
        onDelete={handleDelete}
    />
}

export default ExercisesContainer