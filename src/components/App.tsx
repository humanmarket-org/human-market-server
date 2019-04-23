import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Subscribe } from 'unstated';

import AuthContainer from './containers/AuthContainer';

import AppLayout from './templates/AppLayout';
import MarketSearch from './pages/MarketSearch';
import LocationsMap from './pages/LocationsMap';
import AuthModal from './organisms/AuthModal/AuthModal';

interface AppProps {

}


export default function App(props: AppProps) {
  return (
    <Subscribe to={[AuthContainer]}>
      {(auth: AuthContainer) => (
        <Router>
          <AppLayout onRequestAuth={auth.showModal}>
            <AuthModal
              visible={auth.state.modal}
              onCancel={auth.hideModal}
              onDone={auth.setAuth}/>
            <Route path='/' exact component={() => 'Front Page!'} />
            <Route path='/mercado' exact component={MarketSearch} />
            <Route path='/lugares' exact component={LocationsMap} />
            <Route path='/comunidad' exact component={() => 'Community'} />
          </AppLayout>
        </Router>
      )}
    </Subscribe>
  );
}

if (module.hot) {
  module.hot.accept();
}
