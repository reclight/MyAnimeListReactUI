import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-bar">
            <Link to="/">
                <h1 className="header-title">
                    Weeb Portal
                </h1>
            </Link>
            
        </div>
        
    );
};

Header.propTypes = {
    message: PropTypes.string
};

export default Header;