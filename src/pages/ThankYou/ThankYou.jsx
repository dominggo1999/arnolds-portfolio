import React from 'react';
import Redirect from '~/layout/Redirect/Redirect.jsx';
import { ReactComponent as ThanksLogo } from '../../icons/thanks.svg';

const ThankYou = () => {
  return (
    <Redirect
      title="Thanks for the message!"
      subtitle={"I'll get back to you as soon as possible!"}
      icon={ThanksLogo}
    />
  );
};

export default ThankYou;
