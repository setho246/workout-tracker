import { Exercise } from "./vite-env";

export function createNewExercise(name : string, link: string | undefined) {
    let id = getNextExerciseId();
    let ex : Exercise = { exerciseId: id, name: name, link: link};

    let storage = localStorage.getItem('exerciseList')
    let storedArray : Exercise[] = JSON.parse(storage ?? "[]");
    storedArray.push(ex);
    localStorage.setItem('exerciseList', JSON.stringify(storedArray))

}

function getNextExerciseId() {
    let storage = localStorage.getItem('exerciseList')
    if(storage === null) return 0;
    let storedArray : Exercise[] = JSON.parse(storage);
    return storedArray.length;
}