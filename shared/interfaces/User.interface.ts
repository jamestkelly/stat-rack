import { UUID } from "crypto";

/**
 * Represents a user of the application.
 * @interface
 */
export interface IUser {
  /**
   * The unique identifier for the user.
   */
  uid: UUID;
  /**
   * The user's email address.
   */
  email: string;
  /**
   * The user's first name.
   */
  firstName: string;
  /**
   * The user's last name.
   */
  lastName: string;
  /**
   * Indicates if the user is a guest account.
   */
  isGuest: boolean;
}
