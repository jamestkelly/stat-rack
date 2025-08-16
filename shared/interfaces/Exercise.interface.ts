import { UUID } from "node:crypto";
import { ISetLog } from "./SetLog.interface";

/**
 * Represents a single exercise instance with a name and associated sets.
 * @interface
 */
export interface IExercise {
  /**
   * The unique identifier for the exercise.
   */
  exerciseId: UUID;
  /**
   * The name of the exercise (e.g., "Barbell Bench Press").
   */
  name: string;
  /**
   * The logs for the sets performed during this exercise.
   */
  sets: ISetLog;
}
