import Section from './Section/Section';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  handleTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  handlePositivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.handleTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.handleTotalFeedback();
    const positivePercentage = this.handlePositivePercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleGoodFeedback={this.handleGoodFeedback}
            handleNeutralFeedback={this.handleNeutralFeedback}
            handleBadFeedback={this.handleBadFeedback}
          />
        </Section>
        {totalFeedbacks ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          NotificationManager.info('There is no feedback')
        )}
      </div>
    );
  }
}

export default App;
