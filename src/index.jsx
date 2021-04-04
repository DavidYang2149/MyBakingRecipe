import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import store from './redux/store';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
