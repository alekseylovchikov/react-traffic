import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import ReactTraffic from './components/ReactTraffic.jsx';
import Menu from './components/Menu.jsx';
import Info from './components/Info.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <ReactTraffic />
                <Menu />
                <Info />        
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);