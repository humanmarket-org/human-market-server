import 'antd/dist/antd.less';
import './style/global.less';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import AuthContainer from './components/containers/AuthContainer';

import { LocaleProvider } from 'antd';
import es_ES from 'antd/lib/locale-provider/es_ES';
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';


// import { store } from './store/store';

import App from './components/App';

function renderWithHot (App) {
  ReactDOM.render(
    <Provider inject={[new AuthContainer]}>
      <I18nextProvider i18n={i18n}>
        <LocaleProvider locale={es_ES}>
          <App />
        </LocaleProvider>
      </I18nextProvider>
    </Provider>, document.getElementById('root')
  );
}

renderWithHot(App);

if (module.hot) {
  module.hot.accept();
}

export default {};
