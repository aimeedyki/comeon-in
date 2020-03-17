import React, { useState } from 'react';

import TextField from '../TextField';

const PasswordTextField = (props) => {
  const [isInputHidden, setInputHideStatus] = useState(true);
  const showIcon = 'https://res.cloudinary.com/ddxsazo2k/image/upload/v1584429873/show_xwgxiz.svg';
  const hideIcon = 'https://res.cloudinary.com/ddxsazo2k/image/upload/v1584429815/hide_uja6qg.svg';

  const handleIconClick = () => {
    setInputHideStatus(!isInputHidden);
  };

  return (
    <TextField
      onInputIconClick={handleIconClick}
      inputIcon={isInputHidden ?
        showIcon :
        hideIcon}
      type={isInputHidden ?
        'password' :
        'text'}
      {...props}
    />
  );
};

export default PasswordTextField;
