import React from 'react'

export const ThemeContext = React.createContext()
export const useThemeContext = () => {
  return React.useContext(ThemeContext)
}
export const initialStateTheme =
  JSON.parse(localStorage.getItem('light-theme')) === null
    ? true
    : JSON.parse(localStorage.getItem('light-theme'))
