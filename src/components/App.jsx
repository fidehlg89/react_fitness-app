import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import ExerciseViewContainer from '../pages/ExerciseViewContainer'
import NotFound from '../pages/404'
import HomePage from '../pages/HomePage'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercise" element={<ExercisesContainer />} />
            <Route path="/exercise/new" element={<ExerciseNewContainer />} />
            <Route path="/exercise/edit/:id" element={<ExerciseViewContainer />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App