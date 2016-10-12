import React, { Component } from 'react';

// style
require('./Menu.css');

// components
import SubMenu from './SubMenu.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    {/* must be a component */}
                    <li>
                        <i className="fa fa-user" aria-hidden="true"></i> Publishers <span className="menu-count"><span className="menu-num">12</span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                        <SubMenu visible={true} />
                    </li>
                    <li>My Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Advertisers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>My Advertisers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                </ul>
            </div>
        );
    }
}