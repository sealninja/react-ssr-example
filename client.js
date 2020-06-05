/* global document, window */

import React from 'react';
import ReactDOM from 'react-dom';
import MobileDetect from 'mobile-detect';

import App from './components/App.jsx';

const md = new MobileDetect(window.navigator.userAgent);
let fallbackScreenClass = 'xxl';
if (md.phone() !== null) fallbackScreenClass = 'xs';
if (md.tablet() !== null) fallbackScreenClass = 'md';

ReactDOM.hydrate(<App fallbackScreenClass={fallbackScreenClass} />, document.getElementById('app'));
