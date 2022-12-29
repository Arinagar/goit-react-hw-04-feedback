import { React, Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './Section/Section.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onclickIncrement = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback.toString();
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    const positivePercent = Math.floor((good / (good + neutral + bad)) * 100);
    return positivePercent;
  };

  showStatistics = () => {
    return this.state.good || this.state.neutral || this.state.bad;
  };

  render() {
    const buttons = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const posPerc = this.countPositiveFeedbackPercentage();

    return (
      <section className={css.section}>
        <FeedbackOptions
          buttons={buttons}
          onclickIncrement={this.onclickIncrement}
        />

        {this.state.good || this.state.neutral || this.state.bad ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={posPerc}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}
