import 'antd/dist/antd.less';
import './style/global.less';

import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import { I18nProvider } from './i18n';

import AuthContainer from './components/containers/AuthContainer';

import App from './components/App';

function renderWithHot (App) {
  ReactDOM.render(
    <Provider inject={[new AuthContainer]}>
      <I18nProvider>
        <App/>
      </I18nProvider>
    </Provider>, document.getElementById('root')
  );
}

renderWithHot(App);

if (module.hot) {
  module.hot.accept();
}

export default {};
