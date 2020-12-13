import React from 'react';
import PropTypes from 'prop-types';

export const InputToggle = ({ onClick, theme }) => {
  return (
    <div className="on-off-toggle">
      <input onClick={onClick} className="on-off-toggle__input" type="checkbox" id="bopis" />
      <label
        htmlFor="bopis"
        className={theme ? 'on-off-toggle-theme__light' : 'on-off-toggle-theme__dark'}></label>
    </div>
  );
};

InputToggle.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.bool,
};
