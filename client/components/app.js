import React from 'react';
import actions from './actions';
import HomePage from './homePage/homePage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

  render () {
    return (<div>
        <HomePage/>
    </div>);
  }
}
