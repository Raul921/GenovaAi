import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateString(dateString: string, includeTime: boolean = false): string {
  try {
    const date = parseISO(dateString);
    return format(date, includeTime ? 'MMM d, yyyy h:mm a' : 'MMM d, yyyy');
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString || "Unknown date";
  }
}
