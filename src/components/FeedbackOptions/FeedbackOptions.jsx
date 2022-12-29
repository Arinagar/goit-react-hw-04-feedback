import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ buttons, onclickIncrement }) => (
  <>
    <h2>Please leave feedback</h2>
    <ul className={css.buttons_list}>
      {buttons.map(element => (
        <li key={element}>
          <button
            type="button"
            onClick={() => onclickIncrement(element)}
            className={css[element]}
          >
            {element}
          </button>
        </li>
      ))}
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onclickIncrement: PropTypes.func.isRequired,
};
