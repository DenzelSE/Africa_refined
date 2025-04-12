// Simple utility function to merge class names
export function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ")
  }
  
  