import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../user.json';
import './App.css';

const App = () => (
  <div className="App">
    <Profile props={user} />
  </div>
);

export default App;
