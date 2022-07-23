import React from 'react';
import { ReactComponent as NotFoundLogo } from '~/icons/404.svg';
import Redirect from '~/layout/Redirect/Redirect.jsx';

const NotFound = () => {
  return (
    <Redirect
      title="Oops, Page not found"
      subtitle="Sorry but the page you are looking for does not exist"
      icon={NotFoundLogo}
    />
  );
};

export default NotFound;
