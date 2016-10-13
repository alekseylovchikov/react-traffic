import React, { Component } from 'react';

import Button from './ui/Button.jsx';

export default class TableItem extends Component {
    render() {
        const { id, name, billingAddress, paidForAllTime, paymentMethod, fitToPay, pay } = this.props;
        return (
            <tr>
                <td><input type="checkbox" className="table-checkbox" /></td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{paidForAllTime}</td>
                <td>{paymentMethod}</td>
                <td>{billingAddress}</td>
                <td>{fitToPay}</td>
                <td>{pay ? <Button classes="btn-table btn-pay" title="pay" /> : ''}</td>
            </tr>
        );
    }
}