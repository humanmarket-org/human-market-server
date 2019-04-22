import React, { useState } from 'react';
import th from './AuthModal.sass';
import { Modal, Button, Form, Input, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { useTranslation } from 'react-i18next';

type AuthModalProps = FormComponentProps & {
  visible: boolean;
  onCancel: () => void;
  onDone: (credentials: string) => void;
};

export default Form.create({ name: 'identify' })(
  function AuthModal(props: AuthModalProps) {
    const { visible, onCancel, onDone, form: { getFieldDecorator } } = props;

    const [loading, setLoading] = useState(false);
    const { t }  = useTranslation();

    function handleSubmit (ev: React.FormEvent) {
      ev.preventDefault();
      setLoading(true);
      setTimeout(() => { setLoading(false); onDone('zequez@gmail.com');  }, 2000);
    }

    return (
      <Modal
        title={t('auth.title')}
        visible={visible}
        onOk={handleSubmit}
        confirmLoading={loading}
        onCancel={onCancel}
        className={th.AuthModal}
        footer={[
        <Button loading={loading} type='primary' form='loginForm' key='submit' htmlType='submit'>
          {t('auth.submit')}
        </Button>
        ]}
      >
        <Form id='loginForm' onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{
                required: true,
                message: t('auth.validations.required', {
                  field: t('auth.email').toLocaleLowerCase()
                })
              }],
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={t('auth.email')} />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: t('auth.validations.required', {
                  field: t('auth.password').toLocaleLowerCase()
                })
              }],
            })(
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder={t('auth.password')} />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
);
