var React = require('react');

// style
require('./Menu.css');

var Menu = React.createClass({
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <i className="fa fa-user" aria-hidden="true"></i> Publishers <span className="menu-count"><span className="menu-num">12</span> <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </li>
                    <li>My Publishers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Advertisers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>My Advertisers <i className="fa fa-angle-down" aria-hidden="true"></i></li>
                    <li>Publishers <span>12</span></li>
                    <li>Publishers <span>12</span></li>
                    <li>Publishers <span>12</span></li>
                    <li>Publishers <span>12</span></li>
                    <li>Publishers <span>12</span></li>
                    <li>Publishers <span>12</span></li>
                </ul>
            </div>
        );
    }
});

module.exports = Menu;