import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.js';
import Leftcolumn from './Leftcolumn';
import RedditColumn from './RedditColumn';
import { Row , Col } from 'react-bootstrap';


class RedditApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App-background">
          <Row className="App-body">
            <Col lg={3}><Leftcolumn title="Reddit Viewer" /></Col>
            <Col lg={8}><RedditColumn /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RedditApp;
