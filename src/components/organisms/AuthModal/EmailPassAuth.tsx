import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Button, Form, Input, Icon } from 'antd';
import { Credentials } from '../../containers/AuthContainer';

type EmailPassProps = FormComponentProps & {
  setLoading: (status: boolean) => void;
  onSuccess: (credentials: Credentials) => void;
};

export default function EmailPass(props: EmailPassProps) {
  const { form, setLoading, onSuccess } = props;
  const { t }  = useTranslation();

  function handleSubmit (ev: React.FormEvent) {
    ev.preventDefault();
    setLoading(true);
    form.validateFields((err, values: FormData) => {
      if (!err) {
        setTimeout(() => {
          setLoading(false);
          props.onSuccess({
            name: `Potatoooo`,
            email: values['email'],
            wallet: '123123123',
            id: '321321'
          });
        }, 2000);
      } else {
        setLoading(false);
        console.log(err);
      }
    });
  }

  return <Form id='loginForm' onSubmit={handleSubmit}>
    <Form.Item>
      {form.getFieldDecorator('email', {
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
      {form.getFieldDecorator('password', {
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
  </Form>;
}
