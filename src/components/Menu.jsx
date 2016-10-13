import React, { Component } from 'react';

// style
require('./Menu.css');

// components
import MenuItem from './MenuItem.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <MenuItem title="Publishers" count="12" />
                    <MenuItem title="My Publishers" count="12" />
                    <MenuItem title="Publishers" count="12" />
                    <MenuItem title="Publishers" count="12" />
                </ul>
            </div>
        );
    }
}