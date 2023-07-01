import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
  <div>
    <h2 className={styles.message}>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
