import React from 'react';
import { useHistory } from "react-router-dom";

import './BackButton.scss';

const BackButton = () => {
  let history = useHistory();

  return (
    <div
      className="back-button"
      onClick={() => history.goBack()}
    >
      <img
        className="back-button__icon"
        src="https://res.cloudinary.com/ddxsazo2k/image/upload/v1584179977/backicon_gknbwy.svg"
        alt="user icon"
      />
    </div>
  );
};

export default BackButton;
