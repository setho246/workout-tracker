import { useState } from 'react'
import { Outlet, Link, Route, Routes } from "react-router-dom"
import AddExercise from "./pages/AddExercise";
import RoutineForm from './pages/RoutineForm';
import './assets/css/App.css'
import { Exercise, Routine } from './vite-env';

function App() {

  const [exerciseList, setExerciseList]  = useState<Exercise[]>([])
  const [routineList, setRoutineList]  = useState<Routine[]>([])
  
  return (
    <div id="app" className='p-4'>
      <div className="mb-2">
      <AddExercise exerciseList={exerciseList} setExerciseList={setExerciseList} />
      </div>
      <RoutineForm exerciseList={exerciseList} setExerciseList={setExerciseList} routineList={routineList} setRoutineList={setRoutineList} />

      <div className='bg-white m2 p2'>
        Exercises:
        <br />
        {JSON.stringify(exerciseList)}
        <br/><br/>
        Routines <br/>
        {JSON.stringify(routineList)}
      </div>
      
      {/* <Routes>
        <Route path="/add-exercise" component={<AddExercise />} />
      </Routes> */}
    </div>
  )
}

export default App
