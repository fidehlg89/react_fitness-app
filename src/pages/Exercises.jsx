import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

const Exercises = ({ data, onDelete }) => {
    return (
        <Fragment>
            <Welcome
                username="Ernesto"
            />
            <div className="container">
                <ExerciseList
                    exercises={data}
                    onDelete={onDelete}
                />
            </div>
            <AddButton />
        </Fragment>
    )
}

export default Exercises