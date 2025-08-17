import React, { createContext } from "react";
import { IPredefinedExercise } from "../../../../shared/interfaces/Exercise.interface";
import {
    IWorkout,
    IWorkoutTemplate,
} from "../../../../shared/interfaces/Workout.interface";

/**
 * A React context for managing workout, exercise, and template data.
 */
export const DataContext = createContext<{
  /**
   * An array of all workout logs for the user.
   */
  workouts: IWorkout[];
  /**
   * Sets the array of workout logs.
   * @param workouts The new array of workout logs.
   */
  setWorkouts: (workouts: IWorkout[]) => void;
  /**
   * The workout currently being edited or logged, or `null` if none.
   */
  activeWorkout: IWorkout | null;
  /**
   * Sets the active workout.
   * @param setActiveWorkout A React dispatch function to set the active workout.
   */
  setActiveWorkout: React.Dispatch<React.SetStateAction<IWorkout | null>>;
  /**
   * An array of predefined exercises available to the user.
   */
  exercises: IPredefinedExercise[];
  /**
   * Adds a new custom exercise to the user's list.
   * @param name The name of the new exercise.
   * @returns The newly created predefined exercise object.
   */
  addCustomExercise: (name: string) => IPredefinedExercise;
  /**
   * Deletes a custom exercise by its ID.
   * @param id The ID of the exercise to delete.
   */
  deleteCustomExercise: (id: string) => void;
  /**
   * An array of workout templates for the user.
   */
  workoutTemplates: IWorkoutTemplate[];
  /**
   * Sets the array of workout templates.
   * @param templates The new array of workout templates.
   */
  setWorkoutTemplates: (templates: IWorkoutTemplate[]) => void;
  /**
   * Indicates if data is currently being loaded.
   */
  loading: boolean;
}>({
  workouts: [],
  setWorkouts: () => {},
  activeWorkout: null,
  setActiveWorkout: () => {},
  exercises: [],
  addCustomExercise: () => ({} as IPredefinedExercise),
  deleteCustomExercise: () => {},
  workoutTemplates: [],
  setWorkoutTemplates: () => {},
  loading: true,
});
