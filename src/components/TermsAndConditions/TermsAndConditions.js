import React, { useContext, useState } from 'react';

import { Button, CheckInput, Loader } from '../common';
import { updateUser } from '../../API';
import { AuthenticationContext } from '../../context/AuthenticationContext';

import './TermsAndConditions.scss';

const TermsAndConditions = () => {
  const {
    setNotificationError,
    setUser,
    user
  } = useContext(AuthenticationContext);
  const [areTermsAccepted, setTermAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setTermAccepted(!areTermsAccepted);
  };

  const handleClick = () => {
    if (!areTermsAccepted) {
      setNotificationError('You must accept terms to continue');
    } else {
      updateUser({ ...user, acceptTerms: true })
        .then(response => {
          const userResponse = response.data.response;

          setUser(userResponse);
          setLoading(false);
        })
        .catch(error => {
          setNotificationError(error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="terms">
      <img
        className="terms__icon"
        src="https://res.cloudinary.com/ddxsazo2k/image/upload/v1584201435/Term_wp07xo.svg"
        alt="user icon"
      />
      <h3 className="terms__heading">Terms and Conditions</h3>
      <p className="terms__heading-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan.
      </p>
      <p className="terms__version">Version 25-2020</p>
      <p className="terms__version">Last update 2020-02-22</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui purus, lobortis vel purus non, lacinia commodo arcu. Proin commodo nunc at lectus finibus bibendum. Duis vestibulum, neque vel malesuada ornare, libero metus vulputate turpis, ac efficitur ipsum urna eu mauris. Maecenas ultricies leo non est pulvinar iaculis. Mauris quam quam, iaculis fermentum egestas id, porttitor feugiat magna. Nulla imperdiet mi et mauris pulvinar fermentum. Sed venenatis quam iaculis, tincidunt libero at, pharetra eros. Quisque pulvinar tellus a feugiat tincidunt. Proin non fringilla lectus. Sed sodales ex nisl, quis fringilla massa imperdiet ac. Quisque a facilisis ex, quis tempor sem. Donec feugiat congue urna non euismod. Duis cursus varius nisl eget imperdiet. Mauris consequat libero et convallis blandit.</p>
      <h4 className="terms__sub-heading">Casino Requirements</h4>
      <p>Sed tellus neque, tincidunt quis ullamcorper sed, dignissim quis mi. Aenean porttitor tortor a sem porttitor, gravida commodo velit sodales. Curabitur volutpat pretium ex, suscipit accumsan purus feugiat quis. Nulla placerat egestas lorem. Curabitur nec ultricies ante. Nullam placerat dolor ac est semper vulputate. Quisque neque justo, tempus a condimentum eget, finibus ut nulla. Donec ac urna lectus.</p>
      <h4 className="terms__sub-heading">Use of site and services</h4>
      <p>Praesent nec ante ac augue ullamcorper tristique. Cras malesuada metus in dignissim molestie. Morbi volutpat dolor ut mauris sodales fringilla. Praesent ante sem, porttitor a varius ut, pellentesque vel nulla. Fusce a purus sit amet mauris ultrices mollis id condimentum est. Nullam elementum ante et dolor suscipit, ut ultrices odio pulvinar. Duis sed nunc eu massa imperdiet tempus. Sed gravida, lectus eu dictum tincidunt, justo augue consequat mi, at hendrerit ipsum ex eget velit.</p>
      <h4 className="terms__sub-heading">Personal Data</h4>
      <p>In hendrerit tortor sit amet risus sodales condimentum. Fusce sit amet tempus enim, in condimentum lacus. Aliquam non odio eu sapien rutrum aliquet. Sed pulvinar suscipit nisi vel blandit. Integer quis hendrerit libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam lorem nisi, laoreet non libero non, placerat interdum arcu.</p>
      <h4 className="terms__sub-heading">Disclaimer of warranties</h4>
      <p>Pellentesque mollis, tellus a tincidunt cursus, justo justo auctor nulla, fermentum pulvinar nunc augue non ex. Nulla eu pharetra ipsum. Proin elit metus, auctor eget posuere in, elementum non libero. Nunc vitae sodales quam. Sed euismod finibus condimentum. Nam ultrices, sem in elementum porttitor, mauris justo elementum massa, ut porta erat lectus sed orci. Sed in justo vel augue pretium dapibus. In ut dolor placerat, tincidunt lectus vitae, semper nisi.</p>
      <CheckInput
        checked={areTermsAccepted}
        className="terms__check-input"
        label="I accept the terms and conditions"
        onInputChange={handleCheck}
      />
      <div className="terms__footer">
        <Loader show={loading}>
          <Button
            className="terms__footer__button"
            onClick={handleClick}
          >
            Continue
          </Button>
        </Loader>
      </div>
    </div>
  );
};

export default TermsAndConditions;
