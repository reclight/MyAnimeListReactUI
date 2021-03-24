import React from 'react';
import PropTypes from 'prop-types';

class AppHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

    handleClick(){
        
    }

    render(){
        return (
            <div className="app-list-header">
                <h3 className="app-list-title">{this.props.headertitle}</h3>
            </div>
        );
    }
}

AppHeader.propTypes = {
    headertitle: PropTypes.string
};

export default AppHeader;