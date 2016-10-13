import React, { Component } from 'react';

// components 
import SubMenu from './SubMenu.jsx';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    defaultProps = {
        count: null
    }

    handleToggleVisible() {
        let currentState = this.state.visible;
        this.setState({
            visible: !currentState
        });
    }

    render() {
        const { visible } = this.state;
        return (
            <div>
                <li className="main-item" onClick={this.handleToggleVisible.bind(this)}>
                    <i className="fa fa-user" aria-hidden="true"></i> {this.props.title} <span className="menu-count">{this.props.count ? <span className="menu-num">{this.props.count}</span> : ''} <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </li>
                <SubMenu visible={visible} />
            </div>
        );
    }
}