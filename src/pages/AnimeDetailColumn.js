import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup , Container, Row, Col } from 'react-bootstrap';
import AppHeader from './AppHeader';
import CharacterCard from './CharacterCard';
import axios from 'axios';
import {Link} from 'react-router-dom';


class EpisodeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            animedetail: {},
            studiodetail: [],
            characterdetail: [],
            pageHeader:props.title
        };
    }
    
    componentDidMount(){
        axios.get(`https://api.jikan.moe/v3/anime/${this.props.id}`)
            .then(resp => {
                this.setState({
                    animedetail: resp.data,
                    studiodetail: resp.data.studios[0]
                });
                
            })
            .catch(console.error);
            
        axios.get(`https://api.jikan.moe/v3/anime/${this.props.id}/characters_staff`)
            .then(resp => {
                this.setState({
                    characterdetail: resp.data.characters
                });
                
            })
            .catch(console.error); 
    }

    render(){
        return (
            <div className="right-column">
                <Container>
                    <AppHeader headertitle={this.state.animedetail.title} />
                    <hr />
                    <Row>
                        <Col sm="4">
                            <img className="anime-detail-img" src={this.state.animedetail.image_url}></img>
                        </Col>
                        <Col sm="8">
                            <p className="anime-detail-synopsis">{ this.state.animedetail.synopsis }</p>
                        </Col>
                    </Row>
                    <div className="anime-box-container">
                        <Row>
                            <Col sm>
                                <p className="anime-box-text">Score: {this.state.animedetail.score}</p>
                            </Col>
                            <Col sm>
                                <p className="anime-box-text">Season: {this.state.animedetail.premiered}</p>
                            </Col>
                            <Col sm>
                                <p className="anime-box-text">Studio:
                                    {this.state.studiodetail.name}
                                    </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="scrolling-wrapper">
                        {this.state.characterdetail.map((content, id) =>
                            <CharacterCard image={content.image_url} title={content.name}></CharacterCard>
                        )}
                    </div>
                    <hr />
                    <Row>
                        <Col sm>
                            <AppHeader headertitle='Trailer' />
                            <iframe
                                className="trailer-iframe"
                                src={this.state.animedetail.trailer_url}
                                frameBorder="0"
                                height="100%"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </Col>
                        <Col sm>
                            <div className="anime-box-container">
                                <p className="anime-box-text">Type: {this.state.animedetail.type}</p>
                                <p className="anime-box-text">Source: {this.state.animedetail.source}</p>
                                <p className="anime-box-text">Rating: {this.state.animedetail.rating}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

EpisodeList.propTypes = {
    title: PropTypes.string
};

export default EpisodeList;