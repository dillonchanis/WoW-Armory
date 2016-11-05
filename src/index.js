import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import { Router, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
