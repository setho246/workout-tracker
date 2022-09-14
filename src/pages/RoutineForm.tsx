import React, { SyntheticEvent } from 'react'
import { Exercise, Routine, Workout } from '../vite-env'
import WorkoutModalForm from '../components/WorkoutModalForm';

type Props = {
    exerciseList: Exercise[];
    setExerciseList: React.Dispatch<React.SetStateAction<Exercise[]>>;
    routineList: Routine[];
    setRoutineList: React.Dispatch<React.SetStateAction<Routine[]>>;
    routineToModify?: Routine
}

const RoutineForm = (props: Props) => {
    let defaultRoutine = props.routineToModify ?? {exercises: [], name: '', routineId: props.routineList.length}
    const [modifiedRoutine, setModifiedRoutine] = React.useState<Routine>(defaultRoutine)
    const [ workoutToAdd, setWorkoutToAdd ] = React.useState<Workout>();
    const [showModal, setShowModal] = React.useState<boolean>(false)

    return (
        <div className="container-fluid exercise-form-wrapper py-3">
            <h1 className='text-center'>Add Routine</h1>
            <form>
                <div className='form-floating mb-2'>
                    <input className='form-control' id='name' name='name' placeholder="Exercise Name" value={modifiedRoutine.name} onChange={(e:SyntheticEvent) => {setModifiedRoutine({...modifiedRoutine, name: (e.target as HTMLInputElement).value})}}/>
                    <label htmlFor='name'>Routine Name</label>
                    {JSON.stringify(modifiedRoutine.exercises)}<br/> 
                    <button className="btn btn-secondary mt-2" onClick={ (event: SyntheticEvent) => {event.preventDefault(); setShowModal(true)}}>Add Exercise</button>
                </div>

                <button className='btn btn-primary' type="submit">Save</button>
            </form>

            <WorkoutModalForm exerciseList={props.exerciseList} routine={modifiedRoutine} setRoutine={setModifiedRoutine} setShowModal={setShowModal} showModal={showModal}/>
        </div>
    )
}


export default RoutineForm;