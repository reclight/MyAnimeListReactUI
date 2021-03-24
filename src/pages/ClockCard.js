import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button , Container , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ClockCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date().toLocaleTimeString('it-IT')
        };
    }

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time : new Date().toLocaleTimeString('it-IT')
        });
    }

    render(){
        return (
            <div>
                <p className="clock-text">{this.state.time}</p>
            </div>
        );
    }
}

ClockCard.propTypes = {

};

export default ClockCard;