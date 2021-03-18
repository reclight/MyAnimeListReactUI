import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    handleClick(){

    }

    render(){
        const appcardtitle= this.props.title;
        return (
            <div className="animecard max-width-100">
                <img src={this.props.image} className="animecard-image" />
                <h4 className="animecard-title">{appcardtitle}</h4>
            </div>
        );
    }
}

CharacterCard.propTypes = {

};

export default CharacterCard;