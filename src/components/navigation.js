import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

function Navigation() {
  return (
    <div className='navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
    </div>
  )
}

export default Navigation