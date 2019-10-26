import React from 'react';
import T from 'prop-types';

const StatsList = ({ items }) => (
  <ul className="stat-list">
    {items.map(item => (
      <li className="item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatsList.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ),
};
export default StatsList;
