import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => (
  <div className="Header" data-testid="Header">
    <h1>{ props.title }</h1>
  </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {};

export default Header;
