import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import user from '../../user.json';
import stats from '../../statsData';
import './App.css';

const App = () => (
  <div className="App">
    <Profile props={user} />
    <Stats title="Upload stats" props={stats} />
  </div>
);

export default App;
