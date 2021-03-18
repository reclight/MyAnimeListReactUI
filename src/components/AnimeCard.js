import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AnimeCard extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    handleClick(){

    }

    render(){
        const appCardTitle= this.props.title;
        const appWatchStatus = this.props.watch_status;
        const watchingStatusMap = {1:'Watching', 2:'Completed', 0:'Dropped'};
        return (
            <Col sm>
                <Link to={this.props.link}>
                    <div className="animecard">
                        <img src={this.props.image} className="animecard-image" />
                        <h4 className="animecard-title">{appCardTitle}</h4>
                        <h4 className="animecard-title">{watchingStatusMap[appWatchStatus]}</h4>
                    </div>
                </Link>
            </Col>
        );
    }
}

AnimeCard.propTypes = {
    image: PropTypes.string
};

export default AnimeCard;