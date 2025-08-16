import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility to conditionally join class names and intelligently merge Tailwind CSS classes.
 * It combines `clsx` for conditional logic and `tailwind-merge` to resolve conflicting styles.
 * @param inputs A variable number of class names, class name objects, or arrays of class names.
 * @returns A single, clean string of class names with Tailwind conflicts resolved.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
