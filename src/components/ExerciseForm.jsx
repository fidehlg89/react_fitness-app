import React from 'react'
import './styles/ExerciseForm.css'

const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="ExerciseForm-Card glass">
        <form onSubmit={onSubmit} className="flex column gap-md">
            <div className="Input-Group">
                <label>Exercise Title</label>
                <input
                    type="text"
                    placeholder="e.g. Muscle Up"
                    name="title"
                    onChange={onChange}
                    value={form.title}
                    required
                />
            </div>
            <div className="Input-Group">
                <label>Description</label>
                <input
                    type="text"
                    placeholder="e.g. A high-intensity pull-up variation"
                    name="description"
                    onChange={onChange}
                    value={form.description}
                    required
                />
            </div>
            <div className="Input-Group">
                <label>Image URL</label>
                <input
                    type="text"
                    placeholder="https://..."
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="flex gap-md">
                <div className="Input-Group flex-1">
                    <label>Left Color</label>
                    <input
                        type="color"
                        className="color-picker"
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor || '#56CCF2'}
                    />
                </div>
                <div className="Input-Group flex-1">
                    <label>Right Color</label>
                    <input
                        type="color"
                        className="color-picker"
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor || '#2F80ED'}
                    />
                </div>
            </div>
            <button type="submit" className="Submit-Button">
                Save Exercise
            </button>
        </form>
    </div>
)

export default ExerciseForm