/* global document, window */

import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetect from 'mobile-detect';

import App from './components/App.jsx';

const md = new MobileDetect(window.navigator.userAgent);
let defaultScreenClass = 'xl';
if (md.phone() !== null) defaultScreenClass = 'xs';
if (md.tablet() !== null) defaultScreenClass = 'md';

ReactDOM.hydrate(<App defaultScreenClass={defaultScreenClass} />, document.getElementById('app'));
