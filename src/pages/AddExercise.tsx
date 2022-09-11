import { SyntheticEvent } from 'react'
import * as Store from '../WTStorage'

const AddExercise = () => {
    const saveExercise = (e: SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            name: { value: string };
            link: { value: string };
        };

        Store.createNewExercise(target.name.value, target.link.value)
    }

    return (
        <div className="container-fluid exercise-form-wrapper py-3">
            <h1 className='text-center'>Add Exercise</h1>
            <form onSubmit={saveExercise}>
                <div className='form-floating mb-2'>
                    <input className='form-control' id='name' name='name' placeholder="Exercise Name" required />
                    <label htmlFor='name'>Name:</label>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div className='form-floating mb-2'>
                    <input type='text' className='form-control' id='link' name='link' placeholder='Link to workout example.' />
                    <label htmlFor='link'>Link:</label>
                </div>

                <button className='btn btn-primary' type="submit">Save</button>
            </form>
        </div>
    )
}


export default AddExercise;