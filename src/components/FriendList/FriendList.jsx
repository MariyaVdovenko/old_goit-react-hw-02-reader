import React from 'react';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
