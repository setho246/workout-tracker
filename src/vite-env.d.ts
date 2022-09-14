/// <reference types="vite/client" />

export type Routine = {
    routineId: number;
    name: string;
    exercises: Workout[];
}

export type Workout = {
    workoutId: number;
    name: string;
    exercise: Exercise;
    sets: number;
    reps: number;
    personalBest: number;
    completed: boolean;
    notes: string;
    etc: {};
}

export type Exercise = {
    exerciseId: number;
    name: string;
    link?: string;
}

// export type Workout = {
//     id: number;
//     name: string;
//     Exercises: Exercise[];
// }
// :)
// export type WorkoutEvent = {
//     id: number;
//     workoutType: number;
//     time: number;
//     Exercises: Exercise[];
// }

// export type Exercise = {
//     id: number;
//     name: string;
// }

// export type PersonalBests = {
//     id: number;
//     name: name;
//     exercise: Exercise;
//     overallPb: number;
// }

// export type ExerciseEvent = {
//     time: number;
//     exercise: number;
//     weight: number;
//     reps: number;
//     sets: number;
// }