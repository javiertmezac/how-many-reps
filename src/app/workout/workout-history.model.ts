import { Workout } from "./workout.model";

export interface WorkoutHistory {
    date: Date,
    workouts: Workout[]
}