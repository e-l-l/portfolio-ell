"use client";

// This ensures dark mode is enforced on the client side as soon as possible
// to prevent flashing and hydration mismatches
export function forceDarkMode() {
  // This will execute as soon as the script is loaded on the client
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
}

// Execute immediately
forceDarkMode();

// Export to be used in components if needed
export default forceDarkMode;
