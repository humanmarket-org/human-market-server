import * as React from 'react';

import AppLayout from './templates/AppLayout';

interface AppProps {

}

export default class App extends React.Component<AppProps, null> {
  render () {
    return (
      <AppLayout>
        <div className='filters'>
          Filter down your search
        </div>
        <div className='results'>
          Actual search results
        </div>
      </AppLayout>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}
