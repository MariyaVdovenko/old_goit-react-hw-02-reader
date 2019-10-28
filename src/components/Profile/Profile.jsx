import React from 'react';

import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ props }) => {
  const avatar = props.avatar;
  const name = props.name;
  const tag = props.tag;
  const location = props.location;
  const followers = props.stats.followers;
  const views = props.stats.views;
  const likes = props.stats.likes;

  return (
    <div className="Profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="Profile__avatar" />
        <p className="Profile__name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="Profile__location">{location}</p>(
        <ul className="Profile__stats">
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Followers </span>
            <span className="Profile__stats--quantity">{followers}</span>
          </li>
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Views </span>
            <span className="Profile__stats--quantity">{views}</span>
          </li>
          <li className="Profile__stats--item">
            <span className="Profile__stats--label">Likes </span>
            <span className="Profile__stats--quantity">{likes}</span>
          </li>
        </ul>
        )
      </div>
    </div>
  );
};

Profile.defaultProps = {
  avatar:
    'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjd5Lnn173lAhWIYVAKHWsdA0IQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FioxbTTo_no-avatar-pic-unknown-person-png-transparent-png%2F&psig=AOvVaw2C5z6bCvEgoQJjnClWM3fL&ust=1572308518443346',
  name: 'anonymous',
  location: 'unknown',
  tag: 'no tags',
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
