// Importing required hooks and functions from React
import { createContext, useContext } from "react"

// 1. Create a Context for theme
// This context will provide theme-related data (theme mode and functions to change it)
// We set some default values here: light mode and empty functions
export const ThemeContext = createContext({
    themeMode: "light",   // default theme is light
    darkTheme: () => {},  // function to switch to dark theme (placeholder)
    lightTheme: () => {}  // function to switch to light theme (placeholder)
})

// 2. Extract the Provider from ThemeContext
// The Provider is used to wrap the part of the app where you want the context to be available
export const ThemeProvider = ThemeContext.Provider

// 3. Create a custom hook for easier access to ThemeContext
// Instead of writing useContext(ThemeContext) everywhere, 
// you just call useTheme() inside any component
export default function useTheme() {
    return useContext(ThemeContext)
}