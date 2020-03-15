import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { AuthenticationContext } from '../../../context/AuthenticationContext';
import './Notification.scss';

const Notification = ({ className }) => {
  const { notificationError, setNotificationError } = useContext(AuthenticationContext);

  const hideNotification = () => {
    setNotificationError('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationError('');
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className={classNames(
        className,
        'notification',
        { 'notification--shown': notificationError }
      )}
    >
      <div className="notification__message">
        {notificationError}
      </div>
      <button
        onClick={() => hideNotification()}
        className="notification__close-button"
      >
        <img
          className="notification__close-button__icon"
          src="https://res.cloudinary.com/ddxsazo2k/image/upload/v1576407108/close-icon_e4ygqr.svg"
          alt="close nicon"
        />
      </button>
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.string
};

export default Notification;
