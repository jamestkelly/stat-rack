/**
 * Represents the logged details for a single set of an exercise.
 * @interface
 */
export interface ISetLog {
  /**
   * The weight used for the set. This is always represented in kilograms (kg).
   */
  weight: number;
  /**
   * The number of repetitions performed in the set.
   */
  reps: number;
  /**
   * Indicates if the set was completed.
   */
  completed: boolean;
}
