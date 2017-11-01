import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import './styles/main.scss';

import App from './components/app';

ReactDom.render(<App/>,
document.getElementById('app'));
