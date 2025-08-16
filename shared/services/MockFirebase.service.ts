import { randomUUID } from "crypto";
import { SAMPLE_WORKOUTS } from "../constants/SampleExercises.constant";
import { PREDEFINED_EXERCISES } from "../constants/SampleExerciseTemplates.constant";
import { IPredefinedExercise } from "../interfaces/Exercise.interface";
import { IUser } from "../interfaces/User.interface";
import { IWorkout, IWorkoutTemplate } from "../interfaces/Workout.interface";

/**
 * A mock Firebase authentication service for handling user login, signup, and logout.
 */
export const mockFirebaseAuth = {
  /**
   * Logs in a user with an email and password.
   * @param email The user's email address.
   * @param pass The user's password.
   * @returns A promise that resolves with the user object.
   */
  loginWithEmail: async (email: string, pass: string): Promise<IUser> => {
    console.log(`(Placeholder) Logging in with ${email}`);
    await new Promise((res) => setTimeout(res, 500));
    return {
      uid: randomUUID(),
      email,
      firstName: "John",
      lastName: "Gym",
      isGuest: false,
    };
  },
  /**
   * Signs up a new user with an email and password.
   * @param email The user's email address.
   * @param pass The user's password.
   * @returns A promise that resolves with the newly created user object.
   */
  signUpWithEmail: async (email: string, pass: string): Promise<IUser> => {
    console.log(`(Placeholder) Signing up with ${email}`);
    await new Promise((res) => setTimeout(res, 500));
    return {
      uid: randomUUID(),
      email,
      firstName: "John",
      lastName: "Gym",
      isGuest: false,
    };
  },
  /**
   * Logs out the current user.
   * @returns A promise that resolves when the logout is complete.
   */
  logout: async (): Promise<void> => {
    console.log("(Placeholder) Logging out");
    await new Promise((res) => setTimeout(res, 200));
  },
};

/**
 * A mock Firestore database service for handling user data.
 */
export const mockFirestoreDB = {
  /**
   * Fetches all data related to a specific user.
   * @param userId The unique identifier of the user.
   * @returns A promise that resolves with an object containing the user's workouts, exercises, and templates.
   */
  getUserData: async (
    userId: string
  ): Promise<{
    workouts: IWorkout[];
    exercises: IPredefinedExercise[];
    templates: IWorkoutTemplate[];
  }> => {
    console.log(`(Placeholder) Fetching data for user ${userId}`);
    await new Promise((res) => setTimeout(res, 500));
    return {
      workouts: SAMPLE_WORKOUTS,
      exercises: PREDEFINED_EXERCISES,
      templates: [],
    };
  },
  /**
   * Saves an array of workout logs for a specific user.
   * @param userId The unique identifier of the user.
   * @param workouts An array of workouts to save.
   * @returns A promise that resolves when the workouts have been saved.
   */
  saveWorkouts: async (userId: string, workouts: IWorkout[]): Promise<void> => {
    console.log(
      `(Placeholder) Saving ${workouts.length} workouts for user ${userId}`
    );
    await new Promise((res) => setTimeout(res, 200));
  },
  /**
   * Saves an array of predefined exercises for a specific user.
   * @param userId The unique identifier of the user.
   * @param exercises An array of exercises to save.
   * @returns A promise that resolves when the exercises have been saved.
   */
  saveExercises: async (
    userId: string,
    exercises: IPredefinedExercise[]
  ): Promise<void> => {
    console.log(
      `(Placeholder) Saving ${exercises.length} exercises for user ${userId}`
    );
    await new Promise((res) => setTimeout(res, 200));
  },
  /**
   * Saves an array of workout templates for a specific user.
   * @param userId The unique identifier of the user.
   * @param templates An array of templates to save.
   * @returns A promise that resolves when the templates have been saved.
   */
  saveTemplates: async (
    userId: string,
    templates: IWorkoutTemplate[]
  ): Promise<void> => {
    console.log(
      `(Placeholder) Saving ${templates.length} templates for user ${userId}`
    );
    await new Promise((res) => setTimeout(res, 200));
  },
};
