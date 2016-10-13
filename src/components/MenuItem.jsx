import React, { Component } from 'react';

// components 
import SubMenu from './SubMenu.jsx';

export default class MenuItem extends Component {
    render() {
        return (
            <div>
                <li className="main-item">
                    <i className="fa fa-user" aria-hidden="true"></i> {this.props.title} <span className="menu-count"><span className="menu-num">{this.props.count}</span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </li>
                <SubMenu visible={true} />
            </div>
        );
    }
}