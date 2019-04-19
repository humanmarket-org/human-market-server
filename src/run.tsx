import 'antd/dist/antd.less';
import './style/global.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';

import App from './components/App';

function renderWithHot (App) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root')
  );
}

renderWithHot(App);

if (module.hot) {
  module.hot.accept();
}

export default {};
