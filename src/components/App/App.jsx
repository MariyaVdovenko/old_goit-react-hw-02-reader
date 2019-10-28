import React from 'react';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import user from '../../user.json';
import stats from '../../statsData';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';
import './App.css';

const App = () => (
  <div className="App">
    <Profile props={user} />
    <Stats title="Upload stats" props={stats} />
    <FriendList friends={friends} />
  </div>
);

export default App;
