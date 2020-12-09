import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ChairDetails, Header } from './components';
import { Home, Cart } from './pages';
import { ThemeContext } from './utils';
import { initialStateTheme } from './utils';

const App = () => {
  const [theme, setTheme] = React.useState(initialStateTheme);
  const toggleThemeHandler = () => {
    localStorage.setItem('light-theme', !theme);
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeHandler }}>
      <div className={theme ? 'wrapper' : 'wrapper-dark-theme'}>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/chair/:id" component={ChairDetails} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
