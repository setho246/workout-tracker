import React, { SyntheticEvent } from 'react'
import { Exercise } from '../vite-env'

type Props = {
    exerciseList: Exercise[];
    setExerciseList: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const AddExercise = (props: Props) => {
    const saveExercise = (e: SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            name: { value: string };
            link: { value: string };
        };

    
        let newEx:Exercise = {name: target.name.value, link: target.link.value, exerciseId: props.exerciseList.length}
        props.setExerciseList([...props.exerciseList, newEx])
    }

    return (
        <div className="container-fluid exercise-form-wrapper py-3">
            <h1 className='text-center'>Add Exercise</h1>
            <form onSubmit={saveExercise}>
                <div className='form-floating mb-2'>
                    <input className='form-control' id='name' name='name' placeholder="Exercise Name" required />
                    <label htmlFor='name'>Name</label>
                </div>
                <div className='form-floating mb-2'>
                    <input type='text' className='form-control' id='link' name='link' placeholder='Link to workout example.' />
                    <label htmlFor='link'>Link</label>
                </div>

                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    )
}


export default AddExercise;