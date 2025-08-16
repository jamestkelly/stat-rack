import { UUID } from "crypto";
import { IExercise } from "./Exercise.interface";

/**
 * Represents a specific workout session completed on a given date.
 * @interface
 */
export interface IWorkout {
  /**
   * The unique identifier for the workout session.
   */
  id: UUID;
  /**
   * The date the workout was performed.
   */
  date: Date;
  /**
   * The exercises performed during this workout session.
   */
  exercises: IExercise[];
}

/**
 * Represents a reusable workout template.
 * @interface
 */
export interface IWorkoutTemplate {
  /**
   * The unique identifier for the workout template.
   */
  id: UUID;
  /**
   * The name of the workout template (e.g., "Full Body A").
   */
  name: string;
  /**
   * An array of UUIDs representing the exercises in the template.
   */
  exerciseIds: UUID[];
}
