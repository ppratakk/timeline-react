import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (

            <header>
                <div className="container text-center">
                    <p>{this.props.headerData.username} 's Timeline</p>
                </div>
            </header>);
    }
}


export default Header;