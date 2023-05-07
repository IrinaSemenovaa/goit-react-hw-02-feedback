import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const buttonStyles = css`
  background-color: #ffffff;
  border: 2px solid #3b9494;
  border-radius: 5px;
  color: #222222;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #222222;
    color: #ffffff;
  }
`;

const buttonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
`;

class FeedbackOptions extends Component {
  render() {
    const { handleFeedback } = this.props;
    return (
      <div className={buttonWrapper}>
        <button
          type="button"
          className={buttonStyles}
          onClick={() => handleFeedback('good')}
        >
          Good
        </button>
        <button
          type="button"
          className={buttonStyles}
          onClick={() => handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          type="button"
          className={buttonStyles}
          onClick={() => handleFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
