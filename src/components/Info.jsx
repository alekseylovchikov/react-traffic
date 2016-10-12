import React, { Component } from 'react';

// components
import Table from './Table.jsx';
import Amount from './Amount.jsx';

// style
require('./Info.css');

export default class Info extends Component {
    render() {
        return (
            <div className="info">
                <h1 className="info-heading"><span className="info-heading__color">Publishers.</span> Payments</h1>
                <Amount title="Overall Balance" sum="22469" format="sum" />
                <Amount title="Must payment" sum="3480" format="sum" />
                <Amount title="Profit" sum="18989" format="sum" />
                <Amount title="ROI" sum="84" format="percent" />
                <Table />
            </div>
        );
    }
}