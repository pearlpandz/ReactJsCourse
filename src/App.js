import React, { useState } from 'react';
import './App.css';
import StateComponent from './session 5/state';
import { ThemeContext, AuthContext } from './session 5/context/theme.context';

function App() {
  const [theme, setTheme] = useState('light');
  const [isAutheticated, setAuthorization] = useState(false);

  return (
    <AuthContext.Provider value={{isAutheticated, setAuthorization}}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App" style={{ height: '100vh', backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
          <h1>React Js Course | Session 5</h1>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <StateComponent />
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
