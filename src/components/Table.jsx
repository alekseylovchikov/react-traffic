import React, { Component } from 'react';

// style
require('./Table.css');

// components
import Filter from './Filter.jsx';
import TableItem from './TableItem.jsx';
import Button from './ui/Button.jsx';

export default class Table extends Component {
    render() {
        const person = {
            id: '123987',
            name: 'Aleksey Lovchikov',
            billingAddress: 'aleksey.lovchikov@gmail.com',
            paidForAllTime: '$3,974',
            paymentMethod: 'YandexMoney',
            fitToPay: '$8,987.47',
            pay: true
        };
        return (
            <div className="table">
                <Filter />
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" className="table-checkbox" /></th>
                            <th>ID <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th>Name <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th>Paid for all time <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th>Payment Method <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th>Billing address <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th>Fit to pay <i className="fa fa-filter" aria-hidden="true"></i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableItem {...person} />
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td className="fit-to-pay">$423.23</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td className="fit-to-pay">$1,761.74</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="table-checkbox" /></td>
                            <td>1295308</td>
                            <td>Rebecca Henderson</td>
                            <td>$3,854</td>
                            <td>PayPal</td>
                            <td>superrebecca@gmail.com</td>
                            <td>0</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="per-page">
                    <ul>
                        <li>Rows per page: <span>10</span></li>
                        <li>1-10 of 183</li>
                        <li>
                            <a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
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