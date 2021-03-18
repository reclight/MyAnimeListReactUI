import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.js';
import Leftcolumn from './Leftcolumn';
import AnimeDetailColumn from './AnimeDetailColumn';
import { Row , Col } from 'react-bootstrap';


class AnimeDetail extends Component {
    constructor(props){
        super(props);
        
    }

    

    render() {
        return (
        <div>
            <Header />
            <div className="App-background">
            <Row className="App-body">
                <Col lg={3}><Leftcolumn title="Anime Detail" /></Col>
                <Col lg={8}><AnimeDetailColumn id={ this.props.match.params.id } /></Col>
            </Row>
            </div>
        </div>
        );
  }
}

export default AnimeDetail;
