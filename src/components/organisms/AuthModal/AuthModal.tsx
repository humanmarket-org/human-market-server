import React, { useState } from 'react';
import th from './AuthModal.sass';
import { FormComponentProps } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';
import { Modal, Button, Form, Input, Icon, Tabs } from 'antd';
import EmailPassAuth from './EmailPassAuth';
import OAuths from './OAuths';
import { Credentials } from '../../containers/AuthContainer';

type AuthModalProps = FormComponentProps & {
  visible: boolean;
  onCancel: () => void;
  onDone: (credentials: string) => void;
};

type FormData = {
  email: string;
  password: string;
};


const AuthMode = {
  emailPass: 'emailPass',
  oauth: 'oauth'
};

export default Form.create({ name: 'identify' })(
  function AuthModal(props: AuthModalProps) {
    const { visible, onCancel, onDone, form } = props;

    const [loading, setLoading] = useState(false);
    const [authMode, setAuthMode] = useState(AuthMode.oauth);
    const { t }  = useTranslation();

    function handleCredentials (credentials: Credentials) {
      console.log('Woo! Authorized! Initialize interface revamp! Kick it up a notch!', credentials);
      onDone(credentials.email);
    }

    return (
      <Modal
        title={t('auth.title')}
        visible={visible}
        confirmLoading={loading}
        onCancel={onCancel}
        className={th.AuthModal}
        footer={[
        <Button
          loading={loading}
          type='primary'
          form={authMode === AuthMode.emailPass ? 'loginForm' : null}
          key='submit'
          onClick={authMode === AuthMode.oauth ? onCancel : null}
          htmlType='submit'>
          {t('auth.submit')}
        </Button>
        ]}
      >
        <Tabs defaultActiveKey={authMode} onChange={setAuthMode} tabBarStyle={{textAlign: 'center'}}>
          <Tabs.TabPane key={AuthMode.oauth} tab={t('auth.oauth')}>
            <OAuths setLoading={setLoading} loading={loading} onSuccess={handleCredentials}/>
          </Tabs.TabPane>
          <Tabs.TabPane key={AuthMode.emailPass} tab={t('auth.emailPass')}>
            <EmailPassAuth form={form} setLoading={setLoading} onSuccess={handleCredentials}/>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    );
  }
);
