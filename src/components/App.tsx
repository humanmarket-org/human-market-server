import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppLayout from './templates/AppLayout';
import MarketSearch from './pages/MarketSearch';

interface AppProps {

}

export default class App extends React.Component<AppProps, null> {
  render () {
    return (
      <Router>
        <AppLayout>
          <Route path='/' exact component={() => 'Front Page!'} />
          <Route path='/mercado' exact component={MarketSearch} />
          <Route path='/lugares' exact component={() => 'Places'} />
          <Route path='/comunidad' exact component={() => 'Community'} />
          <Route path='/login' exact component={() => 'Login'} />
        </AppLayout>
      </Router>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}
