import React, { Component } from 'react';

require('./SubMenu.css');

export default class SubMenu extends Component {
    render() {
        const { visible } = this.props;
        if (visible) {
            return (
                <div>
                    <ul className="menu-inside">
                        <li><i className="fa fa-columns" aria-hidden="true"></i> Sites</li>
                        <li><i className="fa fa-line-chart" aria-hidden="true"></i> Statistic</li>
                        <li><i className="fa fa-usd" aria-hidden="true"></i> Payments</li>
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}