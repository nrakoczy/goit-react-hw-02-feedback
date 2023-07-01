import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({ Good, Neutral, Bad, Total, feedback }) => {
  if (Total) {
    return (
      <section>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {Total}</p>
        <p>Positive feedback: {feedback}%</p>
      </section>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

Statistics.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  Total: PropTypes.number,
  feedback: PropTypes.number,
};

export default Statistics;
