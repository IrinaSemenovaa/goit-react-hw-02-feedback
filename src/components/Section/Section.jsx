import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

const sectionStyles = css`
  width: 375px;
  align-items: center;
  text-align: center;
  margin: 12px auto;
  background-color: #3da8a8;
  border: 2px solid #3b9494;
  padding: 35px;
`;
const titleStyles = css`
  margin: 0;
  color: #fff;
`;

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={sectionStyles}>
        <h2 className={titleStyles}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
