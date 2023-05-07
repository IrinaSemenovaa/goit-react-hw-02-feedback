import React, { Component } from 'react';
import { css } from '@emotion/css';

const feedbackMessage = css`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 50px;
`;

class NotificationMessage extends Component {
  render() {
    return <div className={feedbackMessage}>There is no feedback</div>;
  }
}

export default NotificationMessage;
