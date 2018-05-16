import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

// buttonType: btn_edit, btn_del, btn_cancel, btn_save, btn_add
function Button({ buttonType, handleClick, label }) {
  return (
    <button
      className={classNames({ [`btn ${buttonType}`]: true })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
