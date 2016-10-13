import React, { Component } from 'react';

require('./Button.css');

export default class Button extends Component {
    defaultProps = {
        title: 'button',
        classes: 'btn-table',
        symbol: false
    }

    render() {
        const { title, classes, symbol } = this.props;

        return (
            <a href="#" className={`btn ${classes}`}>
                {symbol ? <span>{symbol}</span> : ''} {title}
            </a>
        );
    }
}