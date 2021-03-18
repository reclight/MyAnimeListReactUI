import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button , Container , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppCard extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    handleClick(){

    }

    render(){
        const appcardimage= this.props.image;
        const appcardtitle= this.props.title;
        return (
            <Col sm>
                <Link to={this.props.link}>
                    <div className="appcard half-width">
                        <img src={appcardimage} className="appcard-image" />
                        <h4 className="appcard-title">{appcardtitle}</h4>
                    </div>
                </Link>
            </Col>
        );
    }
}

AppCard.propTypes = {

};

export default AppCard;