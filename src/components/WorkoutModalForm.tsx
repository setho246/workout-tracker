import React, { SyntheticEvent } from "react";
import { Exercise, Routine } from "../vite-env";
import { Modal, Button } from 'react-bootstrap'

type Props = {
    routine: Routine
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>
    exerciseList: Exercise[]
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default (props: Props) => {

    const [selectedExercise, setSelectedExercise] = React.useState<Exercise>()

    const handleExerciseChange = (event: SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        
        if(target.value === "-1") {
            setSelectedExercise(undefined);
            return;
        } 
        
        props.exerciseList.forEach(element => {
            if(element.exerciseId === target.valueAsNumber) {
                setSelectedExercise(element)
            }
        });

    }

    const handleSave = () => {
        props.setShowModal(false)
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={() => props.setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add exercise to Routine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor="exerciseChooser">Exercise:</label>
                        <select className="form-control select" value={selectedExercise?.name} onChange={(e: SyntheticEvent) => { handleExerciseChange(e) }} name="exercise" id="exercise">
                            <option value="-1"> -Select- </option>
                            {props.exerciseList.map(element => (
                                <option key={element.exerciseId} value={element.exerciseId}>{element.name}</option>
                            ))}
                        </select>

                        <div>
                            <label htmlFor="sets">Sets</label>
                            <input type="number" name="sets" id="sets" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSave()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}