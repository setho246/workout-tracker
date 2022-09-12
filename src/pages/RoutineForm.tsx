import React, { SyntheticEvent } from 'react'
import { Exercise, Routine, Regime } from '../vite-env'

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
    const [ regimeToAdd, setRegimeToAdd ] = React.useState<Regime>();
    const [showModal, setShowModal] = React.useState<boolean>(false)

    return (
        <div className="container-fluid exercise-form-wrapper py-3">
            <h1 className='text-center'>Add Routine</h1>
            <form>
                <div className='form-floating mb-2'>
                    <input className='form-control' id='name' name='name' placeholder="Exercise Name" value={modifiedRoutine.name} required />
                    <label htmlFor='name'>Routine Name</label>
                    <button onClick={setShowModal(true)}></button>

                </div>

                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    )
}


export default RoutineForm;