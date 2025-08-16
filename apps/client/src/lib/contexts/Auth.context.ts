import { createContext } from "react";
import { IUser } from "../../../../../shared/interfaces/User.interface";

/**
 * A React context for managing user authentication state.
 */
export const AuthContext = createContext<{
  /**
   * The current authenticated user, or `null` if no user is logged in.
   */
  user: IUser | null;
  /**
   * Asynchronously logs in a user with an email and password.
   * @param email The user's email address.
   * @param pass The user's password.
   * @returns A promise that resolves when the login process is complete.
   */
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  /**
   * Asynchronously signs up a new user with an email and password.
   * @param email The new user's email address.
   * @param pass The new user's password.
   * @returns A promise that resolves when the signup process is complete.
   */
  signUp: (email: string, pass: string) => Promise<void>;
  /**
   * Logs out the current user.
   */
  logout: () => void;
  /**
   * Logs in a user as a guest.
   */
  loginAsGuest: () => void;
  /**
   * Indicates if an authentication operation (e.g., login, signup) is currently in progress.
   */
  loading: boolean;
}>({
  user: null,
  loginWithEmail: async () => {},
  signUp: async () => {},
  logout: () => {},
  loginAsGuest: () => {},
  loading: false,
});
