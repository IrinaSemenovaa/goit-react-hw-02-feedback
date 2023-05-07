import Section from './Section/Section';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
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

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions handleFeedback={this.handleFeedback} />
        </Section>
        {this.handleTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleTotalFeedback()}
              positivePercentage={this.handlePositivePercentage()}
            />
          </Section>
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}

export default App;
