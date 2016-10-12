var React = require('react');
var ReactDOM = require('react-dom');

// components
var ReactTraffic = require('./components/ReactTraffic.jsx');
var Menu = require('./components/Menu.jsx');
var Info = require('./components/Info.jsx');

var App = React.createClass({
    render() {
        return (
            <div>
                <ReactTraffic />
                <Menu />
                <Info />        
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);