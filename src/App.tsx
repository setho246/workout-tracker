import { useState } from 'react'
import { Outlet, Link, Route, Routes } from "react-router-dom"
import AddExercise from "./pages/AddExercise";
import './assets/css/App.css'

function App() {
  return (
    <div id="app" className='p-4'>
      <AddExercise/>
      
      {/* <Routes>
        <Route path="/add-exercise" component={<AddExercise />} />
      </Routes> */}
    </div>
  )
}

export default App
