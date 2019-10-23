import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../user.json';
import './App.css';

const App = () => (
  <div className="App">
    <Profile user={user} />
  </div>
);

export default App;
