import React from 'react';
import user from '../../user.json';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ props }) => {
  return (
    <div className="Profile">
      <div className="description">
        <img
          src={user.avatar}
          alt="user avatar"
          className="Profile__avatar"
          width={200}
        />
        <p className="Profile__name">{user.name}</p>
        <p className="tag">{user.tag}</p>
        <p className="Profile__location">{user.location}</p>
        <ul className="Profile__stats">
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Followers </span>
            <span className="Profile__stats--quantity">
              {user.stats.followers}
            </span>
          </li>
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Views </span>
            <span className="Profile__stats--quantity">{user.stats.views}</span>
          </li>
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Likes </span>
            <span className="Profile__stats--quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Profile.defaultProps = {
//   user.location: 'unknown',
// };

// Profile.propTypes = {
//   user.avatar: PropTypes.string.isRequired,
//   user.name: PropTypes.string,
//   user.tag: PropTypes.string.isRequired,
//   user.location: PropTypes.string.isRequired,
//   user.stats.followers: PropTypes.number.isRequired,
//   user.stats.views: PropTypes.number.isRequired,
//   user.stats.likes: PropTypes.number.isRequired,
// };

export default Profile;
