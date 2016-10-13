import React, { Component } from 'react';

// style
require('./Menu.css');

// components
import MenuItem from './MenuItem.jsx';

export default class Menu extends Component {
    componentDidMount() {
           
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    <MenuItem title="Publishers" count="12" />
                    <MenuItem title="My Publishers" />
                    <MenuItem title="Publishers" />
                    <MenuItem title="Publishers" />
                    <MenuItem title="Publishers" />
                    <MenuItem title="Publishers" />
                </ul>
            </div>
        );
    }
}