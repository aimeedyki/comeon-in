import React, {useContext} from 'react';

import { Button, Card } from '../common';
import { AuthenticationContext } from '../../context/AuthenticationContext';

import './Welcome.scss';

const Welcome = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Card>
      <div className="welcome" data-testid="welcome">
        <div className="welcome__greeting">
          <img
            className="welcome__greeting__icon"
            src="https://res.cloudinary.com/ddxsazo2k/image/upload/v1584224601/confetti_snazm4.svg"
            alt="user icon"
          />
          <h3 className="welcome__greeting__title">
            Hello {user.username}, Welcome!
        </h3>
          <p className="welcome__greeting__text">
            It`s nice to see you.
        </p>
        </div>
        <div className="welcome__balance">
          <p className="welcome__balance__text">
            Your current balance is:
        </p>
          <h3 className="welcome__balance__amount">100 kr</h3>
        </div>
        <Button className="welcome__button">
          Continue
      </Button>
      </div>
    </Card>
  );
};

export default Welcome;
