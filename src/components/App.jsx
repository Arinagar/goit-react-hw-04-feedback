import { React, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './Section/Section.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onclickIncrement = option => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
  };
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback.toString();
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercent = Math.floor((good / (good + neutral + bad)) * 100);
    return positivePercent;
  };

  const buttons = Object.keys({ good, neutral, bad });
  return (
    <section className={css.section}>
      <FeedbackOptions buttons={buttons} onclickIncrement={onclickIncrement} />

      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
};
