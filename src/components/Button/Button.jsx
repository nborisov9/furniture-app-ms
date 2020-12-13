import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Button = ({ outline, children: content, className, onClick }) => {
  return (
    <button
      className={classNames(className, {
        'button-outline': outline,
      })}
      onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  content: PropTypes.any,
  className: PropTypes.string,
};
