/* global document, window */

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import MobileDetect from 'mobile-detect';

import App from './components/App.jsx';

const md = new MobileDetect(window.navigator.userAgent);
let fallbackScreenClass = 'xxl';
if (md.phone() !== null) fallbackScreenClass = 'xs';
if (md.tablet() !== null) fallbackScreenClass = 'md';

const container = document.getElementById('app');
hydrateRoot(container, <App fallbackScreenClass={fallbackScreenClass} />);
