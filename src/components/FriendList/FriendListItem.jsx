import React from 'react';
// import T from 'prop-types';

const FriendListItem = ({ friend }) => {
  const id = friend.id;
  const avatar = friend.avatar;
  const name = friend.name;
  const isOnline = friend.isOnline;
  return (
    <li className="friendListItem" key={id}>
      {isOnline ? (
        <span className="status status-on"></span>
      ) : (
        <span className="status status-off"></span>
      )}
      <img className="avatar" src={avatar} alt="" width="96" />
      <p className="name">{name}</p>
    </li>
  );
};

// FriendListItem.defaultProps = {};

// FriendListItem.propTypes = {
//   id: T.number.isRequired,
//   avatar: T.string,
//   name: T.string.isRequired,
//   isOnline: T.bool.isRequired,
// };

export default FriendListItem;
