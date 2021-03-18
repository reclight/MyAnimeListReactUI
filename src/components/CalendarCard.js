import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button , Container , Table , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CalendarCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date: []
        };
    }

    componentDidMount(){
    }
    render(){
        return (
            <div>
                <h4 className="schedule-title">Weeb Portal!</h4>
            </div>
        );
    }
}

CalendarCard.propTypes = {

};

export default CalendarCard;