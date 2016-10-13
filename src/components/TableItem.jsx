import React, { Component } from 'react';

// components
import Button from './ui/Button.jsx';

require('./TableItem.css');

export default class TableItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    toggleChecked(e) {
        e.preventDefault();

        let currentState = this.state.checked;
        this.setState({
            checked: !currentState
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    render() {
        const { id, name, billingAddress, paidForAllTime, paymentMethod, fitToPay, pay } = this.props;
        let { checked } = this.state;
        return (
            <tr className={checked ? 'checked' : ''}>
                <td>
                    <label onClick={this.toggleChecked.bind(this)}>
                        <input 
                            type="checkbox" 
                            className="table-checkbox"  
                            checked={checked}
                        />
                        <span className={checked ? 'on' : 'off'} />
                    </label>
                </td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{paidForAllTime}</td>
                <td>{paymentMethod}</td>
                <td>{billingAddress}</td>
                <td className={pay ? 'fit-to-pay' : ''}>{fitToPay}</td>
                <td>{pay ? <Button classes="btn-table btn-pay" title="pay" /> : ''}</td>
            </tr>
        );
    }
}