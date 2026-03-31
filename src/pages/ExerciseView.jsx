import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseNew.css'

const ExerciseView = ({ form, onChange, onSubmit }) => (
    <div className="ExerciseNew-Layout flex column gap-lg">
        <h2 className="Section-Title">Update Exercise</h2>
        <div className="ExerciseNew-Preview-Form flex gap-xl">
            <div className="ExerciseNew-Card-Space">
                <Card
                    {...form}
                    editing={true}
                />
            </div>
            <div className="ExerciseNew-Form-Space">
                <ExerciseForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                />
            </div>
        </div>
    </div>
)

export default ExerciseView