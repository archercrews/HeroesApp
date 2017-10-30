import React from 'react';

import HomePage from './homePage/homePage';

export default class App extends React.Component {
    constructor() {
        super();
    }
  render () {
    return (<div>
        <HomePage/>
    </div>);
  }
}
