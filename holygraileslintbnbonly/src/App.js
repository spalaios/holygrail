import React, { Component, Fragment } from 'react';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <p className="test" style={{ border: '1px solid black' }}>
          Let the coding begin...
        </p>
        <List
            data="Its is an object"
            name="suraj"
        />
      </Fragment>
    );
  }
}

export default App;
