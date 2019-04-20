import * as React from 'react';
import { Modal, Button } from 'antd';

interface AuthModalProps {
  visible: boolean;
  onCancel: () => void;
  onDone: (credentials: string) => void;
}

export default class AuthModal extends React.Component<AuthModalProps, {}> {
  state = {
    loading: false,
  };

  handleSubmit = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
      this.props.onDone('zequez@gmail.com');
    }, 2000);
  }

  render() {
    const { visible, onCancel } = this.props;
    const { loading } = this.state;

    return (
      <Modal
        title='Identificarse'
        visible={visible}
        onOk={this.handleSubmit}
        confirmLoading={loading}
        onCancel={onCancel}
      >
        Sign up yo!
      </Modal>
    );
  }
}
