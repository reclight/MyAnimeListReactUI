import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RedditCard extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    handleClick(){

    }

    render(){
        return (
            <Col sm="12">
                <Link to="/animedb/">
                    <div className="listcard">
                        <h4 className="animecard-title">{this.props.title}</h4>
                        <h4 className="animecard-title">{this.props.content}</h4>
                    </div>
                </Link>
            </Col>
        );
    }
}

RedditCard.propTypes = {
    image: PropTypes.string
};

export default RedditCard;