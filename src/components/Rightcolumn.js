import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AppCard from './AppCard';
import ClockCard from './ClockCard';
import CalendarCard from './CalendarCard';
import { Container , Row, Col } from 'react-bootstrap';
import AppHeader from './AppHeader';

const Rightcolumn = (props) => {
    return (
        <div className="right-column">
            <div className="top-bar">
                <Row>
                    <Col sm>
                        <h1 className="top-bar-text">Welcome <br/>Home</h1>
                        <ClockCard />
                    </Col>
                </Row>
                
                
            </div>
            <Container>
                <AppHeader headertitle={ props.headertitle } />
                <Row>
                    <AppCard title="Watched Anime" image="/images/seasonanime.png" link="/watched-anime" />
                </Row>

            </Container>
        </div>
    );
};

Rightcolumn.propTypes = {
    message: PropTypes.string
};

export default Rightcolumn;