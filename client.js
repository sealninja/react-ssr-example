/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import MainComponent from './components/Main.jsx';

ReactDOM.hydrate(<MainComponent />, document.getElementById('app'));
