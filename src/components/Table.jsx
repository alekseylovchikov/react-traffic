import React, { Component } from 'react';

// style
require('./Table.css');

// components
import Filter from './Filter.jsx';
import TableItem from './TableItem.jsx';
import Button from './ui/Button.jsx';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    id: '123987',
                    name: 'Aleksey Lovchikov',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'YandexMoney',
                    fitToPay: '$8,987.47',
                    pay: true
                },
                {
                    id: '123987',
                    name: 'Petr Petrov',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'YandexMoney',
                    fitToPay: '0',
                    pay: false
                },
                {
                    id: '123987',
                    name: 'Oleg Shishnik',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'YandexMoney',
                    fitToPay: '$10,987.47',
                    pay: true
                },
                {
                    id: '123987',
                    name: 'Sergey Ivanov',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'PayPal',
                    fitToPay: '$1,987.47',
                    pay: true
                },
                {
                    id: '123987',
                    name: 'Andrey Petrov',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'YandexMoney',
                    fitToPay: '$3,987.47',
                    pay: true
                },
                {
                    id: '123987',
                    name: 'Ivan Sidorov',
                    billingAddress: 'aleksey.lovchikov@gmail.com',
                    paidForAllTime: '$3,974',
                    paymentMethod: 'YandexMoney',
                    fitToPay: '0',
                    pay: false
                }
            ],
            checked: false
        };
    }

    handleToggleAllItems(e) {
        e.preventDefault();
        let currentState = this.state.checked;
        this.setState({
            checked: !currentState
        });
    }

    render() {
        let { persons, checked } = this.state;
        return (
            <div className="table">
                <Filter />
                <table>
                    <thead>
                        <tr>
                            <th>
                                <label onClick={this.handleToggleAllItems.bind(this)}>
                                    <input
                                        type="checkbox"
                                        className="table-checkbox"
                                        checked={checked}
                                    />
                                    <span className={checked ? 'on' : 'off'} />
                                </label>
                            </th>
                            <th>ID <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th>Name <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th>Paid for all time <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th>Payment Method <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th>Billing address <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th>Fit to pay <i className="fa fa-filter" aria-hidden="true" /></th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person, count) => {
                            return <TableItem key={count} {...person} checked={checked} />
                        })}
                    </tbody>
                </table>
                <div className="per-page">
                    <ul>
                        <li>Rows per page: <span>10</span></li>
                        <li>1-10 of 183</li>
                        <li>
                            <a href="#"><i className="fa fa-angle-left" aria-hidden="true" /></a>
                            <a href="#"><i className="fa fa-angle-right" aria-hidden="true" /></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button title="deselect all" classes="btn-actions btn-deselect" /> <Button title="pay" classes="btn-actions btn-pay" symbol="$" />
                </div>
            </div>
        );
    }    
}