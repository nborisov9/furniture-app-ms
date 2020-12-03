import React from 'react'
import { useThemeContext } from '../../utils'

export const InputToggle = () => {
  const { theme, toggleThemeHandler } = useThemeContext()

  return (
    <div className="on-off-toggle">
      <input
        onClick={toggleThemeHandler}
        className="on-off-toggle__input"
        type="checkbox"
        id="bopis"
      />
      <label
        htmlFor="bopis"
        className={theme ? 'on-off-toggle-theme__light' : 'on-off-toggle-theme__dark'}></label>
    </div>
  )
}
