import React from 'react';

const GoogleSignInButton = ({ onSignIn }) => {
  return (
    <button onClick={onSignIn} style={{ padding: '10px', fontSize: '16px' }}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
