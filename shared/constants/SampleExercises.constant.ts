import { randomUUID } from "crypto";
import { IWorkout } from "../interfaces/Workout.interface";

/**
 * An array of sample workout data for demonstration and testing purposes.
 * @constant
 * @type {IWorkout[]}
 */
export const SAMPLE_WORKOUTS: IWorkout[] = [
  {
    id: randomUUID(),
    date: new Date(new Date().setDate(new Date().getDate() - 21)),
    exercises: [
      {
        exerciseId: randomUUID(),
        name: "Bench Press",
        sets: [
          { weight: 135, reps: 8, completed: true },
          { weight: 135, reps: 8, completed: true },
          { weight: 140, reps: 6, completed: true },
        ],
      },
      {
        exerciseId: randomUUID(),
        name: "Overhead Press",
        sets: [
          { weight: 85, reps: 10, completed: true },
          { weight: 85, reps: 9, completed: true },
          { weight: 90, reps: 8, completed: true },
        ],
      },
    ],
  },
  {
    id: randomUUID(),
    date: new Date(new Date().setDate(new Date().getDate() - 14)),
    exercises: [
      {
        exerciseId: randomUUID(),
        name: "Squat",
        sets: [
          { weight: 185, reps: 5, completed: true },
          { weight: 185, reps: 5, completed: true },
          { weight: 185, reps: 5, completed: true },
        ],
      },
      {
        exerciseId: randomUUID(),
        name: "Deadlift",
        sets: [
          { weight: 225, reps: 5, completed: true },
          { weight: 225, reps: 5, completed: true },
        ],
      },
    ],
  },
  {
    id: randomUUID(),
    date: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        exerciseId: randomUUID(),
        name: "Bench Press",
        sets: [
          { weight: 140, reps: 8, completed: true },
          { weight: 140, reps: 8, completed: true },
          { weight: 145, reps: 6, completed: true },
        ],
      },
      {
        exerciseId: randomUUID(),
        name: "Pull Ups",
        sets: [
          { weight: 0, reps: 10, completed: true },
          { weight: 0, reps: 9, completed: true },
          { weight: 0, reps: 8, completed: true },
        ],
      },
    ],
  },
  {
    id: randomUUID(),
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        exerciseId: randomUUID(),
        name: "Squat",
        sets: [
          { weight: 190, reps: 5, completed: true },
          { weight: 195, reps: 5, completed: true },
          { weight: 195, reps: 5, completed: true },
        ],
      },
      {
        exerciseId: randomUUID(),
        name: "Barbell Row",
        sets: [
          { weight: 115, reps: 8, completed: true },
          { weight: 115, reps: 8, completed: true },
          { weight: 115, reps: 8, completed: true },
        ],
      },
    ],
  },
];
