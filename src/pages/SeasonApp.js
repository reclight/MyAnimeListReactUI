import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.js';
import Leftcolumn from './Leftcolumn';
import SeasonColumn from './SeasonColumn';
import { Row , Col } from 'react-bootstrap';


class SeasonApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App-background">
          <Row className="App-body">
            <Col lg={3}><Leftcolumn title="Your MAL List" subtitle="My username is rec_light, enjoy my list"/></Col>
            <Col lg={8}><SeasonColumn /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SeasonApp;
