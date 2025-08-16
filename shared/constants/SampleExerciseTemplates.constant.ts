import { randomUUID } from "crypto";
import { IPredefinedExercise } from "../interfaces/Exercise.interface";

/**
 * An array of sample predefined exercises for the application.
 * @constant
 * @type {IPredefinedExercise[]}
 */
export const PREDEFINED_EXERCISES: IPredefinedExercise[] = [
  { id: randomUUID(), name: "Bench Press" },
  { id: randomUUID(), name: "Squat" },
  { id: randomUUID(), name: "Deadlift" },
  { id: randomUUID(), name: "Overhead Press" },
  { id: randomUUID(), name: "Barbell Row" },
  { id: randomUUID(), name: "Pull Ups" },
];
