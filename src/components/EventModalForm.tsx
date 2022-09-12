import React from "react";
import { Exercise, Routine } from "../vite-env";

type Props = {
    routine: Routine
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>
    exerciseList: Exercise[]
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default (props: Props) => {
    <form>
        <label htmlFor="exerciseChooser">Exercise:</label>
        <select name="exercise" id="exercise">
            {props.exerciseList.forEach(element => {
               <option>
                
               </option> 
            });}
        </select>
    </form>
}