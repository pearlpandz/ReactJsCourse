import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';
import Users from './pages/users';
import Navigation from './components/navigation';

import './App.css';

function App() {

  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/profile/:name' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
