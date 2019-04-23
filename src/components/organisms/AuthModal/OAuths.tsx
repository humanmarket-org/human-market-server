import React, { useState } from 'react';
import th from './OAuths.sass';
import { Button } from 'antd';
import { Credentials } from '../../containers/AuthContainer';

interface OAuthsProps {
  onSuccess: (credentials: Credentials) => void;
  setLoading: (status: boolean) => void;
  loading: boolean;
}

const socialMedia = {

};

export default function OAuths(props: OAuthsProps) {
  function handleAuthorization (strategy: string) {
    props.setLoading(true);
    setTimeout(() => {
      props.setLoading(false);
      props.onSuccess({
        name: `Potato-${strategy}`,
        email: `zequez@${strategy}.com`,
        wallet: '123123123',
        id: '321321'
      });
    }, 2000);
  }

  return (
    <div className={th.OAuths}>
      <Button
        type='primary'
        icon='facebook'
        disabled={props.loading}
        onClick={() => handleAuthorization('facebook')}
        className={th.Facebook}>
        Sign up with Facebook
      </Button>
      <Button
        type='primary'
        icon='google'
        disabled={props.loading}
        onClick={() => handleAuthorization('google')}
        className={th.Google}>
        Sign up with Google
      </Button>
    </div>
  );
}
