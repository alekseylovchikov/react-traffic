var React = require('react');

// style
require('./Amount.css');

var Amount = React.createClass({
    render() {
        var result = this.props.format === 'sum' ? numeral(this.props.sum).format('$ 0,0.00') : this.props.sum + ' %';
        return (
            <div className="amount">
                <p className="amount-title">{this.props.title}</p>
                <p className="amount-sum">{result}</p>
            </div>
        );
    }
});

module.exports = Amount;