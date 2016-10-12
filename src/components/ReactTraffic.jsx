import React, { Component } from 'react';

// style
require('./ReactTraffic.css');

export default class ReactTraffic extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <img src="img/logo.png" alt="LOGO" className="header-image" /><a href="#" className="header-logo">CDTRAFFIC</a>
                    <a href="#" className="header-logout"><i className="fa fa-sign-out" aria-hidden="true"></i></a>
                </header>
            </div>
        );
    }
}