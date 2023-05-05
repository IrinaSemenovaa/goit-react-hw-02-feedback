import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const statisticsWrapper = css`
  text-align: left;
  margin-top: 12px;
`;
const statisticsText = css`
  text-align: left;
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={statisticsWrapper}>
        <p className={statisticsText}>Good: {good}</p>
        <p className={statisticsText}>Neutral: {neutral}</p>
        <p className={statisticsText}>Bad: {bad}</p>
        <p className={statisticsText}>Total: {total}</p>
        <p className={statisticsText}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
