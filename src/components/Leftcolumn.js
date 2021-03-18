import React from 'react';
import PropTypes from 'prop-types';


const Leftcolumn = (props) => {
    return (
        <div className="left-bar">
            <h2 className="left-bar-text-title">
                { props.title }
            </h2>
            <p> { props.subtitle } </p>
        </div>
        
    );
};

Leftcolumn.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default Leftcolumn;