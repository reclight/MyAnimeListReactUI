import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.js';
import Leftcolumn from './Leftcolumn.js';
import Rightcolumn from './Rightcolumn.js';
import { Row , Col } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App-background">
          <Rightcolumn headertitle="What do you want to do?" />
        </div>
      </div>
    );
  }
}

export default App;
