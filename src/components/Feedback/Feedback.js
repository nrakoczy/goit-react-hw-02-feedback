import React, { useState } from 'react';

import Options from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Sections from '../Statistics/Statistics';

const Feedback = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = event => {
    const { name } = event.target;
    setFeedbackState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () =>
    feedbackState.good + feedbackState.neutral + feedbackState.bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return ((feedbackState.good / countTotalFeedback()) * 100).toFixed();
    } else return 0;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <Options
          options={Object.keys(feedbackState)}
          handleIncrement={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'} />
      <Sections
        Good={feedbackState.good}
        Neutral={feedbackState.neutral}
        Bad={feedbackState.bad}
        Total={countTotalFeedback()}
        feedback={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default Feedback;