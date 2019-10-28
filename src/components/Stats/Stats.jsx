import React from 'react';
import T from 'prop-types';
import StatsList from './StatsList';
import './Stats.css';

const Stats = ({ title, props }) => {
  return (
    <section className="stats-section">
      {title && <h2 className="title">{title}</h2>}
      <StatsList items={props} />
    </section>
  );
};

Stats.propTypes = {
  title: T.string,
};

export default Stats;
