var React = require('react');

// style
require('./Table.css');

// components
var Filter = require('./Filter.jsx');

var Table = React.createClass({
    render() {
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
                            <td><a href="#" className="btn-pay">PAY</a></td>
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
            </div>
        );
    }
});

module.exports = Table;