import { Container } from 'unstated';

type AuthState = {
  modal: boolean,
  auth: string
};

export default class AuthContainer extends Container<AuthState> {
  state = {
    modal: false,
    auth: null
  };

  showModal = () => this.setState({modal: true});
  hideModal = () => this.setState({modal: false});
  setAuth = (auth: string) => this.setState({auth, modal: false});
}
