import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from './pages'
import { ThemeContext } from './utils'
import { initialStateTheme } from './utils'

const App = () => {
  const [theme, setTheme] = React.useState(initialStateTheme)
  const toggleThemeHandler = () => {
    localStorage.setItem('light-theme', !theme)
    setTheme((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>
      <div className={theme ? 'wrapper' : 'wrapper-dark-theme'}>
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
